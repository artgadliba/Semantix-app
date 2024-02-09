export function humanFileSize(bytes: number, dp: number = 1): string {
    if (Math.abs(bytes) < 1000) {
      return bytes + 'Б';
    }
    const units = ['Кб', 'Мб', 'Гб'];
    let u = -1;
    const r = 10**dp;
    do {
      bytes /= 1000;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= 1000 && u < units.length - 1);
  
    return bytes.toFixed(dp) + units[u];
}