import {commandExit, commandHelp} from "./command_functions.js";
import {CLICommand} from "./state.js";



export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        // can add more commands here
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
    };
}