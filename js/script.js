var money= prompt("What is your budget?", "");

    time= prompt("Введите дату YYYY-MM-DD", "");


var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    timeData: time,
    income: [],
    savings: false
};

var answer1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    answer2 = prompt("Во сколько обойдется?",""),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце",""),
    answer4 = prompt("Во сколько обойдется?","");


appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;
alert(appData.budget/30);
