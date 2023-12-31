export function convertTimeToReadable(time: number): string {
    var value: number;
    var noun: string;
    if (time < 60) {
        value = Math.round(time);
        noun = getNoun(value, "секунда", "секунды", "секунд");
    } else {
        value = Math.round(time / 60);
        noun = getNoun(value, "минута", "минуты", "минут");
    }
    return String(value) + " " + noun;
}

function getNoun(number: number, one: string, two: string, plural: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return plural;
    }
    n %= 10;
    if (n == 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return plural;
}