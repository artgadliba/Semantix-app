export function humanFileSize(bytes, dp=1) {

    if (Math.abs(bytes) < 1000) {
      return bytes + 'B';
    }
  
    const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10**dp;
  
    do {
      bytes /= 1000;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= 1000 && u < units.length - 1);
  
    return bytes.toFixed(dp) + units[u];
}