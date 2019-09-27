var score = 1; // Create a variable to store the score in

var title = new Title('welcome to the jungle'); // Create a title element
var button = new Button('collect wood', btnPress);   // Create a button element
var hidden = new Button('collect wood');
hidden.hide();
var scr = new Text(score);                    // Create a text element


changeTitle('Clicker Game');

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  if(score > 25) {
    hidden.hide(500);
  }
  if(score > 20) {
    hidden.show(500);
  }
}
createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
score++;
postToPage(score)
