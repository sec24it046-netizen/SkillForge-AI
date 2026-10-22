# Test plan (starter)
The delivered site is a static frontend prototype. Suggested automated tests for a production React/FastAPI version:
1. Unit: quiz scoring returns 3/3 for all correct responses and 0/3 for all incorrect.
2. Unit: completing a lab awards points only once.
3. Unit: portfolio export contains completed challenge IDs and clearly marks the record as a prototype.
4. End-to-end: open dashboard → complete Cyber Safety Check → verify progress and badge → refresh → verify local progress persists.
5. Security: ensure lab containers cannot access host filesystem, cloud metadata, or unrestricted networks.
