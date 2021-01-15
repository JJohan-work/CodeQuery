function displayQuestion(curCont) {
  $(".qcont").hide();
  $(".qcont").removeClass("elemDisplay");
  $(".qcont").removeClass("questionExpand");
  $(curCont).show();
  $(curCont).addClass("elemDisplay");
  $(curCont).addClass("questionExpand");
}

function nextQuestion(curQ) {
  console.log(curQ);
  curQ += 1;
  console.log(curQ);
}

$(document).ready(function() {
  let curQ = 1;
  let curCont = "#Q"+curQ.toString()+">.qcont";
  $("#next").click(nextQuestion(curQ));
});


  // let curQ = 1;
  // let curCont = "#Q"+curQ.toString()+">.qcont";
  // displayQuestion(curCont);
  // $("#next").on( "click", console.log("hello"));