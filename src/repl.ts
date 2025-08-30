import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  // split strings into array
  input = input.toLowerCase();
  let trimmed = input.trim();
  return trimmed.split(" ");
}

export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", (raw: string) => {
    const word: string = handleLine(raw);
    const commands = getCommands();
    // console.log(commands["exit"]);

    if (+word === 0) {
      state.rl.prompt();
      return;

    }
    else if (commands[word]) {
      // const command: CLICommand = commands[word];
      state.commands[word].callback(state);
      state.rl.prompt();
      return;
    } else {
        console.log("Unknown command");
        state.rl.prompt();
        return;
    }
  });
}

export function handleLine(raw: string): string {
  const words: string[] = cleanInput(raw.trim());
  return words[0];
}

