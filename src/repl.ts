import { createInterface } from "node:readline";
import { CLICommand, getCommands } from "./commands";
import { commandExit } from "./command_exit";

export function cleanInput(input: string): string[] {
  // split strings into array
  input = input.toLowerCase();
  let trimmed = input.trim();
  return trimmed.split(" ");
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();

  rl.on("line", (raw: string) => {
    const word: string = handleLine(raw);
    const commands = getCommands();

    if (+word === 0) {
      rl.prompt();
      return;

    }
    else if (word in commands) {
      const command: CLICommand = commands[word];
      command.callback();
      rl.prompt();
      return;
    }
  });
}

export function handleLine(raw: string): string {
  const words: string[] = cleanInput(raw.trim());
  return words[0];
}

