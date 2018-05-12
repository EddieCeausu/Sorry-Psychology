var questions = ["In________ reinforcement, the reinforcer follows every correct response.\nintermittent\npartial\nnegative\nContinuous", "::D", ]

function questionGetter() {
  var a = questions.pop()
  var q = questions.pop()
  // TODO:
  /* Do something here that will seperate the q into different
  * strings by option and will put the answer at the end */
  return []
}
function changePreviousQuestion(question, options, answer) {
  var ptag = document.getElementById('Text2');
  ptag.innerHTML = question;
}
function changeCurrentQuestion(question) {
  var q = options[0];
  options.slice(0,1);
  var a = options.pop();
  
  var ptag = document.getElementById('Text1');
  ptag.innerHTML = question;
}

function questionHandler() {
  var options = questionGetter();


}
