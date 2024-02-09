export function parseFileLength(length: number, seconds: boolean = false): string {
    let k = 1;
    if (seconds) {
        k = 1000;
    }
    return new Date(length * k).toISOString().slice(11, 19);
}