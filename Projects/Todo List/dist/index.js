#!/usr/bin/env node
import { TodoCLI } from './cli.js';
async function main() {
    const cli = new TodoCLI();
    await cli.start();
}
// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error.message);
    process.exit(1);
});
process.on('unhandledRejection', (reason) => {
    console.error('❌ Unhandled Rejection:', reason);
    process.exit(1);
});
// Start the application
main().catch((error) => {
    console.error('❌ Application Error:', error.message);
    process.exit(1);
});
//# sourceMappingURL=index.js.map