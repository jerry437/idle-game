var score = 15; // Create a variable to store the score in
var settraps = 10;
var title = new Title('welcome to the jungle'); // Create a title element
var collect = new Button1('collect wood', btnPress);   // Create a button element
var settraps = new Button2('set traps');
var  lightfire = new Button3('light fire');

hidden.hide();
var scr = new Text(score);                    // Create a text element
var scr = new text(score);

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();

  }
}  
