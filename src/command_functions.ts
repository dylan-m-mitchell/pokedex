import { State } from "./state.js";

export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close();
    process.exit(0);
}

export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!\n" +
        "Usage:\n");
    for (let i in state.commands) {
        console.log(`${state.commands[i].name}: ${state.commands[i].description}`);
    }
    // console.log(commands.name);
}