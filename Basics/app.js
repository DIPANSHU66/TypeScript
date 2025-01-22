function add(num1, num2, r, s) {
    if (r)
        console.log("".concat(s, "  &{num1+num2}"));
    else
        return num1 + num2;
}
console.log(add(1, 2, true, 'sum of two  number is'));
