const bill = prompt('Вкажіть сумму рахунку');
const tipsPercent = prompt('Скільки бажаете залишити чайових');

if (bill === null || tipsPercent === null) {
  alert('Canceled.');
} else {
  const billNumber = Number(bill);
  const tipNumber = Number(tipsPercent);
  if (
    Number.isNaN(billNumber) ||
    Number.isNaN(tipNumber) ||
    billNumber <= 0 ||
    tipNumber < 0 ||
    tipNumber > 100
  ) {
    alert('Invalid input data');
  } else {
    const tipAmount = (billNumber * tipNumber) / 100;
    const totalSum = billNumber + tipAmount;
    alert(
      `Check sum: ${billNumber}\nTip: ${tipNumber}%\nTip amount: ${tipAmount}\nTotal sum to pay: ${totalSum}`
    );
  }
}
