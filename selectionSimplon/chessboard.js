const number = 9;
let strCase = " ";
let lineCases = "";

for (i = 0 ; i < number ; i++) {
    for (j=0 ; j< number ; j++) {
        lineCases += strCase;
        if ( strCase == " ") {
            strCase = "#";
        } else {
            strCase = " ";
        }
    }
    console.log(lineCases);
    lineCases = "";
    if (number % 2 == 0) {
        if ( strCase == " ") {
            strCase = "#";
        } else {
            strCase = " ";
        }
    }
}