# Project Instructions

## Purpose

This file defines the project's architecture, code organization, and implementation conventions. Infer the project architecture from these instructions and follow them when making changes.

If architecture instructions are missing, incomplete, ambiguous, or insufficient for the requested change, infer from the current implementation and ask the user for confirmation.

If the codebase conflicts with documented architecture or design instructions, prioritize the documented instructions and report the conflict to the user.

## Architecture

```text
public/
src/
├── assets/           # Images, icons, and fonts
├── components/       # Shared UI components
├── features/         # Feature-specific components, hooks, and logic
├── hooks/            # Shared React hooks
├── pages/            # Route-level components
├── services/         # API clients and integrations
├── styles/           # Global styles and theme
├── types/            # Shared TypeScript types
├── utils/            # Shared utility functions
├── App.tsx           # Root component and routing
└── main.tsx          # Application entry point
index.html
package.json
```

## Files Naming Conventions

## Other Rules
