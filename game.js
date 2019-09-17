var score = 0;

postToPage(score); // Print to the page

createButton('gerald', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score--;
  postToPage(score)
}
function gerald() {
  score++;
  postToPage(score)
}
createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
score++;
postToPage(score)
