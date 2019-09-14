' use strict ' ;

var money = +prompt ("What is your budget?", ""),
    time = prompt ("Введите дату YYYY-MM-DD", "");

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    timeData: time,
    income: [],
    savings: false
};

for (var i = 0; i < 2; i++) {
     var a = prompt("Введите обязательную статью расходов в этом месяце",""),
         b = prompt("Во сколько обойдется?","");

    if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null &&
    a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
        }
}

/*var i = 0; 
while (i < 2) {
    var a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");
        i++;
    if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
        }
}*/

/*var i = 0;
do {
    var a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");
        i++;
    if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
        }
}
while (i < 2);*/


function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();