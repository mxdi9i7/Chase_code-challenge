class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    if (num2 === 0) return NaN;
    return num1 / num2;
  }
  multiplyExp(num1, num2) {
    return this.multiply(
      this.pow(num1[0], num1[1]),
      this.pow(num2[0], num2[1])
    );
  }
  divideExp(num1, num2) {
    return this.divide(this.pow(num1[0], num1[1]), this.pow(num2[0], num2[1]));
  }
}

class ScientificCalculator extends Calculator {
  sin(num) {
    return Math.sin(num);
  }
  cos(num) {
    return Math.cos(num);
  }
  tan(num) {
    return Math.tan(num);
  }
  log(num) {
    return Math.log(num);
  }
}

const withExponentials = {
  pow(num, power) {
    return Math.pow(num, power);
  }
};

Object.assign(Calculator.prototype, withExponentials);

const delay = (timeout, obj, operation, nums) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result;
      if (obj[operation]) {
        result = obj[operation](nums[0], nums[1]);
        resolve(result);
      } else {
        reject();
      }
    }, timeout);
  });
};

const calculator = new Calculator();
const scientificCalculator = new ScientificCalculator();
