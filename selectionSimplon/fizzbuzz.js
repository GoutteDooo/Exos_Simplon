let number = 1;

for (i = number ; i <= 100 ; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0 ) {
            console.log("buzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
}