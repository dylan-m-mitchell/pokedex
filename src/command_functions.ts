import { CLICommand } from "./commands.js";

export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!\n" +
        "Usage:\n");
    for (let i in commands) {
        console.log(`${commands[i].name}: ${commands[i].description}`);
    }
    // console.log(commands.name);
}