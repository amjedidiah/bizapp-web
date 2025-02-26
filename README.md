# BizApp Customer Support Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-14.1.3-000000?logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.19.1-green)](https://nodejs.org/)

A modern customer support dashboard for managing live chat, customer interactions, and support team collaboration. Built with Next.js App Router and TypeScript.

![Supervisor Dashboard Preview](https://i.ibb.co/jvJtkjV2/screenshot.png)
![Agent Dashboard Preview](https://i.ibb.co/svPgs4mX/screenshot.png)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **State Management**: React Context + SWR
- **Icons**: React Icons
- **Build Tools**: Yarn + Husky Git Hooks

## Features

### Customer Support Core

- Real-time chat interface
- Customer profile management
- Complaint tracking system
- Conversation templates
- Internal agent messaging (InMail)

### Team Management

- Role-based access control (Agent/Supervisor)
- Online status management
- Team performance metrics
- Shift scheduling integration

### Dashboard Features

- Responsive grid layout
- Custom data tables with pagination
- Interactive data visualizations
- Configurable notification system
- Multi-device support

## Getting Started

### Prerequisites

- Node.js v18.19.1
- npm v10.2.4 or Yarn 1.22+

### Installation

```bash
git clone https://github.com/amjedidiah/bizapp
cd bizapp

# Using Yarn (recommended)
yarn install
yarn dev

# Using npm
npm install
npm run dev
```

### Environment Setup

1. Start development server:

   ```bash
   yarn dev
   ```

2. Open <http://localhost:3000> with your browser to see the result.

## Project Structure

```bash
bizapp/
├── src/
│   ├── app/                 # Next.js app router
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities & constants
│   ├── hooks/               # Custom React hooks
│   └── context/             # React context providers
├── public/                  # Static assets
├── tailwind.config.ts       # Design system config
└── postcss.config.js        # CSS processing
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Future Roadmap

- **Component Improvements**
  - Enhanced Table component with sorting/filtering
  - Sticky customer profiles (desktop optimized)
  - Advanced chat message formatting

- **Architecture**
  - Monorepo structure for cross-platform support
  - OG Image generation for social sharing
  - Automated performance monitoring

- **Collaboration**
  - Real-time agent collaboration features
  - Supervisor escalation workflows
  - Team knowledge base integration

> **Note**: Requires Node v18.19.1 for development
