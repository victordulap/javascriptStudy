// Avem 2 ciclisti care pornesc din locatii diferite (A,B), 1 ciclist 10Km/h; 2 ciclist 15Km/h

// Calculati distanta dintre orase, daca ei se intilnesc peste 3 ore

/* Algoritm

// Calculam distanta parcura de primul ciclist



// Calculam distanta parcura de al doilea ciclist



// Facem suma distantelor

*/

var cyclist1 = {
   "location": "A",
   "speed": 10 // km/h
}

var cyclist2 = {
   "location": "B",
   "speed": 15 // km/h
}

var calculateDistance = function (speedOfFirstCyclist, speedOfSecondCyclist, intersectTime) {
   let distanceOfFirstCyclist = speedOfFirstCyclist * intersectTime;
   let distanceOfSecondCyclist = speedOfSecondCyclist * intersectTime;

   let totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
   return totalDistance;
}

console.log("Distance from " + cyclist1.location + " to " + cyclist2.location + " is " + calculateDistance(cyclist1.speed, cyclist2.speed, 3) + " km.");