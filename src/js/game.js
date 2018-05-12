var questions = ["In________ reinforcement, the reinforcer follows every correct response.\nintermittent\npartial\nnegative\nContinuous", "::D", ]

function questionGetter() {
  var a = questions.pop()
  console.log(a);
  var q = questions.pop()
  var options = []
  var str = "";
  for(var i = q.length-1;i >=0;i--) {
    if(q[i] != "\n"){
      str = q[i] + str;
    } else {
        options.unshift(str);
        str = "";
      }
  }
  var i = 0
  for(i = 0; i < q.length; i ++) {
    if(q[i] == "\n") {
      break;
    }
  }
return {question : q.slice(0, i - 1), option : options, answer : a.slice(2, 3)}
}

function htmCreator(q,o,a) {
    var input = "<input type=\"radio\" ";
    var str = "<form action=\"\">" + q + "<br>";
    for(var i = 0; i < o.length; i++) {
      str += input + "name=\"Option " + i + "value=\"" + String.fromCharCode(65 + i) + "\"> " + o[i] + "<br>";
    }
    return str;
}

function changePreviousQuestion(dic, response) {
  var ptag = document.getElementById('Text2');
  ptag.innerHTML = dic.question;
  
}

function changeCurrentQuestion(dic) {
  var q = dic.question;
  var o = dic.option;
  var a = dic.answer;
  var ptag = document.getElementById('Text1');
  ptag.innerHTML = htmCreator(q,o,a);
}

function qCheck(response,answer) {
  if(resposnse == answer) return true;
  return false;
}

function questionHandler() {
  var quest = questionGetter();
  changeCurrentQuestion(quest);
}
