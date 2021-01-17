// Functions
function expandQuestion(x) {
  $(x).animate({
    height: '500px',
});
}

function shrinkQuestion(x) {
  $(x).animate({
    height: '50px',
});
}

function displayQuestion(curCont) {
  $(".qcont").hide();
  $(".qcont").removeClass("elemDisplay");
  $(curCont).show();
  $(curCont).addClass("elemDisplay");
}

function nextQuestion(x,y) {
  if (!(x === 1)) {
    shrinkQuestion("#Q"+(x-1).toString())
    window.scrollBy(0, 50);
  }
  displayQuestion(y);
  expandQuestion("#Q"+x.toString());
  if (x <= 8){
    x += 1;
  } else {
    shrinkQuestion("#Q"+(x).toString())
    displayAnswer()
    x = 1
  }
  return x
}

// Answer functions

function displayAnswer() {
  $("#answer").show();
  console.log(answers);
  let x = indexOfMax(answers);
  if (x == 0) {$("#python").show()}
  else if (x == 1) {$("#C").show()}
  else if (x == 2) {$("#JavaScript").show()}
  else if (x == 3) {$("#R").show()}

}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }
  var max = arr[0];
  var maxIndex = 0;
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }
  return maxIndex;
}

//answer input array:
answers = [0,0,0,0];

//main function:
$(document).ready(function() {
  $(".qcont").hide();
  $("#answer").hide();
  $("#answer>div").hide();

  $(".answer").append('<div class="colorbar"><div class="R"></div><div class="O"></div><div class="Y"></div><div class="G"></div><div class="C"></div><div class="B"></div><div class="V"></div><div class="P"></div></div>');
  $(".colorbar").hide();

  curQ = 1;
  let curCont = "#Q"+curQ.toString()+">.qcont";
  curQ = nextQuestion(curQ,curCont);
  $(".answer").click([curQ],function() {
    let curCont = "#Q"+curQ.toString()+">.qcont";
    curQ = nextQuestion(curQ,curCont)
    answer = $(this).attr("class").split(' ')[0];
    if (answer == "A1") {
      let a = answers[0];
      a += 1;
      answers[0] = a;
    }
    else if (answer == "A2") {
      let a = answers[1];
      a += 1;
      answers[1] = a;
    }
    else if (answer == "A3") {
      let a = answers[2];
      a += 1;
      answers[2] = a;
    }
    else if (answer == "A4") {
      let a = answers[3];
      a += 1;
      answers[3] = a;
    }
  });
  $(".answer").hover(
    function() {$($(this).find(".colorbar")).show()},
    function() {$($(this).find(".colorbar")).hide()}
  );
});