export function cleanInput(input: string): string[] {
    // split strings into array 
    let trimmed = input.trim();
    return trimmed.split(' ');
}

