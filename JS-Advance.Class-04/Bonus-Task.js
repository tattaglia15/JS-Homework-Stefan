function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
  let num = 10;
  console.log(" Factorial of " + num + " is " + factorial(num))