SkillForge TN

AI-Guided Cyber Security & Industrial IoT Skill Labs for Tamil Nadu Students

Bridging the gap between engineering education and industry-ready skills through AI-powered, hands-on virtual laboratories.

---

Project Links

- Live Prototype: https://relaxed-faloodeh-541020.netlify.app

1. Project Overview

SkillForge TN is an AI-powered learning platform designed to help engineering students across Tamil Nadu develop practical skills in Cyber Security and Industrial Internet of Things (IIoT).

The platform combines browser-based virtual labs, a bilingual AI mentor, structured learning paths, and practical assessments to provide accessible, industry-oriented training without requiring expensive physical laboratory infrastructure.

It aims to empower students from urban, semi-urban, and rural colleges with the technical knowledge and practical experience needed for emerging Industry 4.0 careers.

2. Problem Statement

Many engineering students graduate with theoretical knowledge but limited hands-on experience in Cyber Security and Industrial IoT. The lack of affordable laboratory facilities, industry mentors, structured practical training, and accessible learning resources creates a gap between academic education and industry expectations.

This challenge is particularly significant for students in Tier-2 and Tier-3 colleges, where access to advanced infrastructure and specialized training may be limited.

SkillForge TN addresses this problem by providing practical, guided, and accessible virtual skill labs.

3. Proposed Solution

SkillForge TN provides an integrated digital learning environment with the following capabilities:

- AI-Powered Mentor: Interactive learning assistance in Tamil and English.
- Virtual Cyber Security Labs: Controlled practice environments for learning security concepts and defensive techniques.
- Industrial IoT Simulations: Simulated sensors, PLC workflows, MQTT communication, and industrial monitoring scenarios.
- Structured Learning Paths: Role-based modules that guide learners from foundational concepts to advanced challenges.
- Automated Assessments: Auto-graded challenges and skill evaluations to measure progress.
- Skill Badges: Recognition for completing learning paths and practical challenges.
- Student Portfolio: A platform to showcase completed labs, skills, achievements, and project work.

4. Objectives

1. Bridge the gap between academic learning and industry requirements.
2. Provide affordable access to practical Cyber Security and IIoT training.
3. Support bilingual learning for improved accessibility.
4. Develop problem-solving skills through interactive lab challenges.
5. Help students build practical portfolios for internships and placements.
6. Encourage industry collaboration through college partnerships and sponsorships.

5. Key Features

Feature| Description
Bilingual AI Mentor| Learning assistance in Tamil and English
Cyber Security Labs| Safe, controlled security practice environments
IIoT Virtual Labs| Simulations of sensors, PLCs, and MQTT workflows
Personalized Learning| Structured paths based on skill level and career goals
Automated Assessments| Evaluation of challenges and learning progress
Skill Badges| Recognition of completed learning activities
Student Dashboard| Progress tracking, scores, and completed labs
Portfolio Generation| Presentation of practical skills and achievements

6. How It Works

1. Assess: Students evaluate their existing knowledge and skill levels.
2. Learn: They follow structured Cyber Security or IIoT learning paths.
3. Practice: They complete interactive virtual labs and practical challenges.
4. Receive Feedback: The AI mentor explains concepts and helps students understand mistakes.
5. Evaluate: Automated assessments measure learning progress.
6. Earn Recognition: Students earn badges after meeting defined completion criteria.
7. Showcase: Students share their achievements through a portfolio.

7. Technology Stack

Component| Technology
Frontend| React
Backend API| FastAPI
Database| PostgreSQL
Lab Isolation| Docker
Industrial Workflow Simulation| Node-RED
Additional Services| Node.js, where required
AI Integration| Large Language Model API
Industrial Communication| MQTT

The final technology stack may vary according to the implementation of the prototype.

8. Proposed System Architecture

             STUDENT
                |
                v
        REACT WEB PLATFORM
                |
                v
          FASTAPI BACKEND
                |
        +-------+--------+
        |       |        |
        v       v        v
    DATABASE  AI API  LAB MANAGER
                         |
                   +-----+-----+
                   |           |
                   v           v
             CYBER SECURITY  INDUSTRIAL IoT
             VIRTUAL LABS    SIMULATIONS
                   |           |
                   +-----+-----+
                         |
                         v
                 RESULTS AND SCORING
                         |
                         v
                 BADGES AND PORTFOLIO

Practical security exercises should run in isolated, controlled environments with appropriate access restrictions and resource limits.

9. UN Sustainable Development Goals

SDG 4: Quality Education

Supports Target 4.4 by improving technical and vocational skills relevant to employment and entrepreneurship.

SDG 8: Decent Work and Economic Growth

Promotes employability through practical, job-relevant skill development.

SDG 9: Industry, Innovation and Infrastructure

Encourages technical capabilities relevant to industrial modernization and Industry 4.0.

SDG 10: Reduced Inequalities

Improves access to practical technical learning for students from underserved educational institutions.

The project also aligns with the broader objectives of Skill India and Digital India.

10. Expected Impact and Success Metrics

The platform's effectiveness can be evaluated through the following indicators:

- Number of registered and active students.
- Virtual lab completion rate.
- Improvement in pre-assessment and post-assessment scores.
- Number of skill badges earned.
- Student satisfaction and AI mentor usefulness ratings.
- Internship and placement outcomes, where measurable data is available.
- Participation from Tier-2 and Tier-3 colleges.

These metrics will help evaluate learning outcomes and guide future improvements.

11. Sustainability Model

SkillForge TN proposes a sustainable model that balances accessibility with long-term development.

- Free Student Tier: Core learning resources and selected virtual labs.
- College Partnerships: Institutional access to advanced labs, dashboards, and assessments.
- Industry Sponsorships: Sponsored learning paths, practical challenges, and skill-development initiatives.
- Advanced Training: Optional specialized learning modules and certification preparation.

12. Installation and Setup

The setup instructions should reflect the actual implementation available in the repository.

Prerequisites

- Git
- Node.js and npm
- Python
- Docker
- PostgreSQL

Clone the Repository

git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER

Configure Environment Variables

Create a ".env" file using the provided ".env.example" template.

Configure the required database settings, AI API credentials, and other environment variables. Never commit real API keys, passwords, or secrets to GitHub.

Run the Application

Refer to the frontend, backend, and Docker configuration directories for the appropriate installation and execution commands.

Replace this section with verified setup commands once the prototype is finalized.

13. Suggested Repository Structure

SkillForge-TN/
├── frontend/
├── backend/
├── labs/
│   ├── cybersecurity/
│   └── industrial-iot/
├── data/
│   └── sample/
├── tests/
├── docs/
│   └── design.pdf
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── LICENSE
└── README.md

This is a suggested structure. Update it to match the actual files and directories in your repository.

14. Security and Responsible Use

- Conduct practical exercises only within authorized, isolated environments.
- Keep vulnerable lab targets separated from production systems and public networks.
- Apply appropriate authentication, access controls, and resource limits.
- Protect student information and credentials.
- Never expose API keys or sensitive information in source code.
- Use security exercises for educational, testing, and defensive purposes.

15. Future Enhancements

- Personalized AI-generated learning plans.
- Expanded Tamil learning resources.
- Additional industrial communication and OT security simulations.
- Industry-designed practical challenges.
- College-level progress dashboards.
- Integration with internship and placement preparation resources.
- Analytics to identify skill gaps and recommend learning activities.

16. Contribution Guidelines

Contributions and suggestions that improve accessibility, learning quality, virtual lab safety, and technical performance are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Submit a pull request with a clear description.

17. License

The project is intended to be released under the MIT License or another suitable open-source license.

Add the corresponding license file to the repository before declaring the project officially licensed.

18. Project Information

- Project Name: SkillForge TN
- Domain: Education Technology, Cyber Security, and Industrial IoT
- Theme: Education and Skill Development
- Target Users: Engineering students, colleges, and industry training partners
- Geographical Focus: Tamil Nadu, India

---

SkillForge TN: Learn. Practice. Secure. Innovate.
