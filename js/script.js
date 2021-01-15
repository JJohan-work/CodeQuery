// Functions
function expandQuestion(x) {
  $(x).animate({
    height: '800px',
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
    $("#answer").show();
    x = 1
  }
  return x
}
function displayAnswer() {}


//answer array:
answers = [0,0,0,0];

//main function:
$(document).ready(function() {
  $(".qcont").hide();
  $("#answer").hide();
  $("#answer>div").hide();
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
});