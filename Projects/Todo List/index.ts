#!/usr/bin/env node

import { TodoCLI } from './cli.js';

async function main(): Promise<void> {
  const cli = new TodoCLI();
  await cli.start();
}

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason: unknown) => {
  console.error('❌ Unhandled Rejection:', reason);
  process.exit(1);
});

// Start the application
main().catch((error) => {
  console.error('❌ Application Error:', error.message);
  process.exit(1);
});
