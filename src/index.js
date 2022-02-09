module.exports = function toReadable(number) {
    let numbersinwords = {
        lesstwenty: {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen"
        },
        dozens: "ty",
        hundreds: "hundred",
        thousands: "thousand",
        millions: "million",
        billions: "billion"
    }
    let n = String(number).split("").reverse().join("");
    let words = "";
    let currectnumber;
    if (number === 0) {
        return "zero";
    }
    for (let i = n.length - 1; i >= 0; i--) {
        if (i == 3) {
            currectnumber = numbersinwords.lesstwenty[n[i]]
            if (n[i] != 0) {
                words += currectnumber + " " + numbersinwords.thousands + " ";
            }
        } else if (i == 2) {
            currectnumber = numbersinwords.lesstwenty[n[i]]
            if (n[i] != 0) {
                words += currectnumber + " " + numbersinwords.hundreds + " ";
            }
        } else if (i == 1) {
            currectnumber = numbersinwords.lesstwenty[n[i]];
            if (n[i] != 0) {
                if (20 > n[i] + n[i - 1] && n[i] + n[i - 1] >= 10) {
                    words += numbersinwords.lesstwenty[(n[i] + n[i - 1])];
                    return words;
                } else if (n[i] == 2) {
                    words += "twenty ";
                } else if (n[i] == 3) {
                    words += "thirty ";
                } else if (n[i] == 4) {
                    words += "forty ";
                } else if (n[i] == 5) {
                    words += "fifty ";
                } else {
                    if (/[\w]t$/.test(currectnumber)) {
                        words += currectnumber.slice(0, currectnumber.length - 1) + numbersinwords.dozens + " ";
                    } else {
                        words += currectnumber + numbersinwords.dozens + " ";
                    }
                }
            }
        } else if (i == 0) {
            currectnumber = numbersinwords.lesstwenty[n[i]];
            if (n[i] != 0) {
                words += currectnumber;
            }
        }
    }
    return words.replace(/\s$/, "");
}