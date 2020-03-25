const budget_total = parseFloat($(".total_budget span").text());

$("body").on("keyup keydown keypress change", ".department input", function(e){
  let running_total = budget_total;

  $(".department input").each(function() {
    let user_input = $(this).val();

    if (user_input !== "") {
      user_input = parseFloat(user_input);
      running_total = running_total - user_input;
  }
  });

  if (running_total >= 0 && running_total <=20) {
    $(".total_budget").addClass("warning").removeClass("error");
  } else if (running_total < 0) {
    $(".total_budget").addClass("error").removeClass("warning");
  } else {
    $(".total_budget").removeClass("error warning");
  }


  $(".total_budget span").text(running_total);
});
