// UNICODE CAN BE UTILIZED 

var diceArray = [];
var createBtn = document.getElementById('create');
// document.getElementById('create').addEventListener('click', function() {}) B/C NOT KEEPING BUTTON
var rollBtn = document.getElementById('roll');

createBtn.addEventListener('click', function(){
    var d = new Die(); // CANNOT ACCESS VARIABLE, NEED TO MAKE ARRAY
    diceArray.push(d); // OR diceArray.push(new Die());
});

rollBtn.addEventListener('click', function() {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();  // i = CURRENT ELEMENT; WHAT IS CURRENT ELEMENT? AN OBJECT (diceArray) CALLING METHOD (.roll)
    }
});

document.getElementById('sum').addEventListener('click', function() { // document ALLOWS HTML MANIPULATION, ACCESS
var sum = 0; // OUTSIDE for loop BLOCK B/C sum WOULDN'T RESET
for (var i = 0; i < diceArray.length; i++) {
    sum = sum + diceArray[i].value; // OLD VALUE OF sum + CURRENT ARRAY VALUE = UPDATED SUM
    // sum += diceArray[i].value; SAME AS ABOVE; TELS TO INCREMENT SUM
}
alert('The sum of the dice is ' + sum); // ALGORITHM
})

function Die() { // NO VAR B/C WANT HOISTING
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.addEventListener('click', this.roll.bind(this)); // roll WHEN CLICK THIS DIV; bind TO LOOK AT VALUE, NOT div
    this.div.addEventListener('dblclick', this.removeDie.bind(this));
    this.roll(); // NEED TO BE BELOW div CREATION
    document.body.appendChild(this.div); 
}
Die.prototype.roll = function() {
    this.value = Math.floor(Math.random() * 6) + 1; //Math.ciel(Math.random() * 6; PUSHES DECIMAL INTEGERS UP)
    this.div.innerHTML = this.value; // "Look at this div & look at this value & look at this object"
}
Die.prototype.removeDie = function () { // DELETED STILL LIVES IN ARRAY; ADDRESS FOR ACCURACY
    this.div.remove(); // FUNCTION BUILT INTO EACH HTML ELEMENT; SAYS "Remove element: (dbl-clicked on) div"
    // RESEARCH indexOf() (W3 School; MDN) EVEN LOOK AT string.prototype()
    var index = diceArray.indexOf(this); // "Hey diceArray, give me object, give me object to look for (& delete)"
    diceArray.splice(index, 1); // DELETES 1 ITEM FROM index
}

