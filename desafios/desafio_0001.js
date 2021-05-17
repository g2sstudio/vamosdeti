// Desafio: https://www.instagram.com/p/CO-SkS3t-Ri/

function showMessage(message) {
  window.alert(message);
  console.log(message)
}

function calculate(workedDays, salary) {
  return salary * Number(workedDays);
}

function run() {
  const PEDRO_SALARY = 10;
  const PAULO_SALARY = 12;

  const workedDays = Number(prompt("How many days they worked?", "10"));
  const pedroCoins = calculate(workedDays, PEDRO_SALARY);
  const pauloCoins = calculate(workedDays, PAULO_SALARY);

  const resultMessage = "Pedro has " + pedroCoins + " coins\n" +
    "Paulo has " + pauloCoins + " coins";

  showMessage(resultMessage);
}

run();
