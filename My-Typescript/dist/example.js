"use strict";
class NumberToWords {
    constructor(num) {
        this.num = num;
    }
    convert() {
        const below20 = [
            "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
            "Sixteen", "Seventeen", "Eighteen", "Nineteen"
        ];
        const tens = [
            "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        ];
        if (this.num === 0)
            return "Zero";
        let result = '';
        let number = this.num; // Work on a copy to avoid modifying original `num`
        if (number >= 1000) {
            result += below20[Math.floor(number / 1000)] + " Thousand ";
            number %= 1000;
        }
        if (number >= 100) {
            result += below20[Math.floor(number / 100)] + " Hundred ";
            number %= 100;
        }
        if (number >= 20) {
            result += tens[Math.floor(number / 10)] + " ";
            number %= 10;
        }
        if (number > 0 && number < 20) {
            result += below20[number] + " ";
        }
        return result.trim();
    }
}
// Usage example
const number = 1234;
const numberToWords = new NumberToWords(number);
console.log(numberToWords.convert()); // Output: "One Thousand Two Hundred Thirty Four"
