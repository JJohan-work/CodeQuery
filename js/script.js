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
    window.scrollBy(0, 100);
  }
  displayQuestion(y);
  expandQuestion("#Q"+x.toString());
  console.log(x);
  if (x <= 8){
    x += 1;
  } else {
    shrinkQuestion("#Q"+(x).toString())
    x = 1
  }
  console.log(x);
  return x
}

$(document).ready(function() {
  $(".qcont").hide();
  curQ = 1;
  $("body").click([curQ],function() {
    let curCont = "#Q"+curQ.toString()+">.qcont";
    curQ = nextQuestion(curQ,curCont)
  });
});


  // let curQ = 1;
  // let curCont = "#Q"+curQ.toString()+">.qcont";
  // displayQuestion(curCont);
  // $("#next").on( "click", console.log("hello"));