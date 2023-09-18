export function parseDate(jsonDate: string): string {
    const date = new Date(JSON.parse(JSON.stringify(jsonDate)));
    const year = date.getUTCFullYear();
    const month = date.getMonth();
    const day = date.getUTCDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const formattedMin = min.toLocaleString('en-US', {minimumIntegerDigits: 2});
    
    const months = ["Янв.", "Фев.", "Мар.", "Апр.", "Май", "Июн.", 
            "Июл.", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."];
    
    const result = String(day) + " " + months[month] + " " + String(year) + " " + String(hour) + ":" + String(formattedMin);

    return result;
}