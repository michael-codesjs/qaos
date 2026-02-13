# Qaos: Testing with Intent

Standard QA is too predictable. You need **Qaos** to find the bugs that actually matter.

Qaos (pronounced "Chaos") is an autonomous quality assurance platform that moves away from brittle "Step-Based Testing" to introduces **"Intent-Based Testing."** Powered by the Amazon Nova suite, Qaos agents understand the _why_ behind actions, adapting to UI changes in real-time just like a human user would.

---

## 🚀 The Agent Suite (Amazon Nova Powered)

Qaos is powered by specialized agents that see, reason, and act within the browser:

- **🕵️ The Strategist (Nova 2 Lite)**: The brain that plans the "chaos." It handles unexpected popups or redesigned pages by "thinking" of new ways to reach the goal.
- **🧭 The Navigator (Nova Act)**: The engine that drives the browser. It doesn't look at code; it looks at the website, navigating complex flows with human-like reliability.
- **👁️ The Visual Oracle (Multimodal)**: High-fidelity visual inspection. It detects layout shifts, overlapping text, and dead pixels that standard tools miss.
- **🔊 The Sonic (Nova 2 Sonic)**: Real-time intelligence updates and voice feedback on test status.

## ✨ Key Features

- **Zero Maintenance**: Stop fixing "flaky" tests. Intent-based agents don't care about changing DOM selectors or IDs.
- **Autonomous Discovery**: Beyond the "happy path." Agents explore alternative routes to find edge cases human-written scripts miss.
- **Visual Integrity**: Verifies what users actually see, ensuring the app doesn't just "work," but feels right.

---

## 🛠️ Project Structure

This is a monorepo managed with **TurboRepo**.

```text
qaos/
├── clients/
│   └── marketing/      # Next.js 15 site (Tailwind CSS 4)
│       ├── (marketing) # Landing pages & public content
│       └── (auth)      # Authentication flows
├── services/
│   └── main/           # Core backend service
├── docs/               # Evolution and technical documentation
└── .agent/             # Custom agent workflows
```

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (for backend services)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/michael-codesjs/qaos.git
   cd qaos
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development servers:
   ```bash
   npm run dev
   ```

## 🏆 Hackathon Details

Built for the **Amazon Nova Hackathon 2026** under the **Agentic AI** and **UI Automation** categories. Qaos demonstrates a future where software quality is about truth, not script maintenance.

---

© 2026 Qaos Inc. | Built with Intent.
