export function parseDate(jsonDate: string): string {
    const date = new Date(JSON.parse(JSON.stringify(jsonDate)));
    const day = date.getUTCDate();
    const month = date.getMonth();
    const year = date.getUTCFullYear();
    
    const months = ["Янв.", "Фев.", "Мар.", "Апр.", "Май", "Июн.", 
            "Июл.", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."];
    
    const result = String(day) + " " + months[month] + " " + String(year);

    return result;
}