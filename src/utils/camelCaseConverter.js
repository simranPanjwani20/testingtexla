export function toCamelCase(str) {
    if (str == null) return '';
    let result = '';
    let capitalizeNext = false;
    for (let i = 0; i < str?.length; i += 1) {
        if (str[i] === ' ') {
            capitalizeNext = true; // set flag to capitalize next character
        } else if (str[i] === '-') {
            capitalizeNext = true; // set flag to capitalize next character
        } else if (capitalizeNext) {
            result += str[i].toUpperCase();
            capitalizeNext = false;
        } else if (i === 0) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}



