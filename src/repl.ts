import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

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
    // console.log(commands["exit"]);

    if (+word === 0) {
      rl.prompt();
      return;

    }
    else if (commands[word]) {
      // const command: CLICommand = commands[word];
      commands[word].callback(commands);
      rl.prompt();
      return;
    } else {
        console.log("Unknown command");
        rl.prompt();
        return;
    }
  });
}

export function handleLine(raw: string): string {
  const words: string[] = cleanInput(raw.trim());
  return words[0];
}

