import { startREPL, cleanInput } from "./repl.js";
import { initState, State } from "./state.js";

function main() {
  let state: State = initState();
    startREPL(state);
}

main();
