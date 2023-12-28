function getNumber(a, b) {
    let number = a;
    let timer = setInterval (function() {
      console.log(number);
      if (number == b) {
        clearInterval(timer);
      }
      number++;
    }, 1000);
  }
  getNumber (21,26)