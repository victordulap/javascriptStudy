//var obj = {
//    "Minsk": "Belarus",
//    "Moscow": "Russia",
//    "Kiyev": "Ukraine"
//};
//
//for (var key in obj) {
//    alert(key);
//}
//
//for (var key in obj) {
//    alert(obj[key]);
//}

var mas = [10, 20, 30, 50, 235, 3000];
for (var i = 0; i < mas.length; i++) {
   var ttt=mas[i];
    while (ttt > 0) {
        // debugger;
        var digit = ttt % 10;
        // ttt /= 10;
        ttt /= 10;
        ttt = parseInt(ttt);
        if (ttt == 1 || ttt == 2 || ttt == 3) {
            document.writeln(mas[i]);
            break;
        }

        //print digit
    }
}
