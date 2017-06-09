var rollCall = [];
var genBtn = document.getElementById('create');
var loop = document.getElementById('roll');

genBtn.addEventListener('click', function () {
    var d = new Die();
    rollCall.push(d);
});
loop.addEventListener('click', function () {
    for (var i = 0; i < rollCall.length; i++) {
        rollCall[i].roll();
    }
});
document.getElementById('sum').addEventListener('click', function () {
    var sum = 0;
    for (var i = 0; i < rollCall.length; i++) {
        sum = sum + rollCall[i].value;
    }
    alert('The sum of the dice is ' + sum + '.');
})


var Die = function () {
    this.div = document.createElement('div');
    this.div.className = 'dice';
    this.div.addEventListener('click', this.roll.bind(this))
    this.roll();
    document.body.appendChild(this.div);
}
Die.prototype.roll = function () {
    this.value = Math.floor(Math.random(this.value) * 6) + 1;
    this.div.innerHTML = this.value;
}