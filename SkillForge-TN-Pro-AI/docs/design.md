# Technical Design — SkillForge TN

## Current prototype
Static, responsive HTML/CSS/JavaScript. All interactions run in the browser; progress is stored in localStorage. No remote API calls are made.

## Proposed production architecture
Student browser → React frontend → FastAPI API → PostgreSQL.
The mentor request flows through FastAPI to an approved LLM provider. API keys remain server-side. Lab jobs are created by the API and executed in short-lived Docker containers with CPU/memory/time limits, read-only base images, non-root users, no privileged mode, isolated networks, and no host mounts. Results are validated before being stored. Node-RED and an MQTT broker should run only in a segregated training environment.

## Data flow
1. Student selects a learning path.
2. Frontend requests lab metadata from the API.
3. Student submits a quiz or starts a sandbox scenario.
4. API validates the submission and calculates score.
5. Sandbox service runs a time-limited isolated scenario if required.
6. API stores completion and returns progress/badge eligibility.
7. Mentor messages are sent to the backend; secrets are never exposed to the browser.

## Safety boundary
The included sensor and incident scenarios are simulations only. They do not connect to real PLCs, factory networks, or external targets. A production deployment needs threat modelling, access controls, audit logs, privacy review, and independent security testing.
