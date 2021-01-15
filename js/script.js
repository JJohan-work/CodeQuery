function displayQuestion(curCont) {
  $(".qcont").hide();
  $(".qcont").removeClass("elemDisplay");
  $(".qcont").removeClass("questionExpand");
  $(curCont).show();
  $(curCont).addClass("elemDisplay");
  $(curCont).addClass("questionExpand");
}

function nextQuestion(x,y) {
  console.log(y);
  x += 1;
  console.log(x);
  displayQuestion(y);
  return x
}

$(document).ready(function() {
  $(".qcont").hide();
  curQ = 1;
  $("#next").click([curQ],function() {
    let curCont = "#Q"+curQ.toString()+">.qcont";
    curQ = nextQuestion(curQ,curCont)
  });
});


  // let curQ = 1;
  // let curCont = "#Q"+curQ.toString()+">.qcont";
  // displayQuestion(curCont);
  // $("#next").on( "click", console.log("hello"));