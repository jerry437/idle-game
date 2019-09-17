var score = 0;

var title = new HTMLElement('h1', 'Welcome to the Game');
title.add();
var button = new Button('hello', btnPress);
button.add();
var scr = new HTMLElement('p', score);
scr.add();

createButton('gerald', btnPress); // Make a button
changeTitle('Clicker Game');

function btnPress() {
  score++;
  scr.edit(score);
}
createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
score++;
postToPage(score)
