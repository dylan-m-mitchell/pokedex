import { createInterface } from "node:readline";
export function cleanInput(input) {
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
    rl.on("line", (raw) => {
        const word = handleLine(raw);
        if (+word === 0) {
            //   console.log("\n");
            rl.prompt();
            return;
        }
        else {
            console.log(`Your command was: ${word}`);
            rl.prompt();
            return;
        }
    });
}
export function handleLine(raw) {
    const words = cleanInput(raw.trim());
    return words[0];
}
// // typescript
// rl.on("line", (raw: string) => {
//   const words = /* clean the raw input into an array */;
//   if (/* no words */) {
//     /* prompt again and return */
//   }
//   /* print "Your command was: <first word>" */
//   /* prompt again */
// });
