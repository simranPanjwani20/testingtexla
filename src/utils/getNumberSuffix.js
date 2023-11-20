export function getNumberSuffix(number) {
    if (number >= 11 && number <= 20) {
        return 'th';
    }

    const lastDigit = number % 10;
    const secondLastDigit = Math.floor(number / 10) % 10;

    if (secondLastDigit === 1) {
        return 'th';
    }

    switch (lastDigit) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}