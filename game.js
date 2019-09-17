var score = 0;

var title = new HTMLElement('h1', 'Welcome to the Game');
var button = new Button('hello');
var buttonWorld = new Button('world');
var columns = new Columns(2);

createButton('gerald', btnPress); // Make a button
changeTitle('Clicker Game');

columns.addToColumn(1, buttonWorld);
columns.addToColumn(2, button);

setInterval(update, 5);
setInterval(increment, 1000);

function update() {
  button.edit(score);
}

function increment() {
  score++;
}
createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
score++;
postToPage(score)
