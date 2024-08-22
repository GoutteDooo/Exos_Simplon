const countBs = (str) => {
    let numberBs = 0
    for (i = 0 ; i < str.length ; i++) {
        if (str[i] === "B") {
            numberBs++;
        }
    }
    return numberBs;
}

const countChar = (str, letter) => {
    let numberLetter = 0;
    for (i=0 ; i < str.length ; i++) {
        if (str[i] == letter) {
            numberLetter++;
        }
    }
    return numberLetter;
}


console.log(countChar("BBCEZDBadqsb", "B"));
