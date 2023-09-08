export function parseFileLength(value: number): string {
    const rounded = Math.round(value);
    return new Date(rounded * 1000).toISOString().slice(11, 19);
}