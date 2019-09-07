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

appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 10000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 10000 && appData.moneyPerDay < 20000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 20000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}