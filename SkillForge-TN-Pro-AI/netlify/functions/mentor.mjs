export default async (request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Use POST." }), {
      status: 405, headers: { "Content-Type": "application/json" }
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "AI is not configured yet." }), {
      status: 503, headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await request.json();
    const question = typeof body.question === "string" ? body.question.trim() : "";
    if (!question || question.length > 1200) {
      return new Response(JSON.stringify({ error: "Enter a question under 1200 characters." }), {
        status: 400, headers: { "Content-Type": "application/json" }
      });
    }

    const aiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: `You are SkillForge TN's friendly study mentor for college students, especially beginners in Tamil Nadu.
Answer study questions across subjects: computer science, programming, networking, cloud computing, cybersecurity, Industrial IoT, maths, science, and general academics.
Use simple English by default. If the user asks for Tamil or Tanglish, answer that way. Explain step by step, give a small example, and use headings or bullets when helpful. For exam questions, provide an exam-friendly answer with an introduction, key points, example, and conclusion when appropriate. If a question is unclear, ask one short clarification. Be honest when uncertain. Never claim to have accessed course materials the student did not provide.
For cybersecurity, focus on safe, authorized learning and defensive practice. Do not provide instructions that facilitate real-world attacks, credential theft, malware, or unauthorized access. For health, legal, or other high-stakes topics, give general information and recommend a qualified professional where appropriate. Keep answers student-friendly and concise unless asked for detail.`,
        input: [{ role: "user", content: [{ type: "input_text", text: question }] }],
        max_output_tokens: 700
      })
    });

    const result = await aiResponse.json();
    if (!aiResponse.ok) {
      return new Response(JSON.stringify({ error: "The AI service could not answer right now." }), {
        status: 502, headers: { "Content-Type": "application/json" }
      });
    }

    const answer = (result.output || [])
      .flatMap(item => item.content || [])
      .filter(part => part.type === "output_text")
      .map(part => part.text)
      .join("\n")
      .trim();

    if (!answer) throw new Error("Empty AI response");
    return new Response(JSON.stringify({ answer }), {
      status: 200, headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Could not process the question. Please try again." }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = { path: "/.netlify/functions/mentor" };
