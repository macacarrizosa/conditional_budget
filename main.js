const budget_total = parseFloat($(".total_budget span").text());
//This code line above stores our value of 100 on our page after functions kick in.

$("body").on("keyup keydown keypress change", ".department input", function (e) {
	let running_total = budget_total;

	$(".department input").each(function () {
		let user_input = $(this).val();
		//$(this).val(); means that you are looking for whatever value the user inputs into the field.
		if (user_input !== "") {
			user_input = parseFloat(user_input);
			running_total = running_total - user_input;
		}
		//The 'if' statement above is used so that when you enter a number in a section while the other sections are blank, then it will still change the budget number up top and not return NaN on the page.
	});

	if (running_total >= 0 && running_total <= 20) {
		$(".total_budget").addClass("warning").removeClass("error");
	} else if (running_total < 0) {
		$(".total_budget").addClass("error").removeClass("warning");
	} else {
		$(".total_budget").removeClass("error warning");
	}
	//This 'if' block is for CSS and changing the color of the running_total to yellow when the budget hits 20 and red when it hits 0. We use the addClass and removeClass functions so that the colors reset if we make changes in our input fields.
	let warning_content_text = "You are getting close to budget. Make good choices."
	let error_content_text = "You are over budget! Make some changes."

	if (running_total >= 0 && running_total <= 20) {
		$(".warning_content").text(warning_content_text);
		$(".error_content").text("");
	} else if (running_total < 0) {
		$(".error_content").text(error_content_text);
		$(".warning_content").text("");
	} else if (running_total > 20) {
		$(".warning_content").text("");
		$(".error_content").text("");
	};
	//The 'if' block above creates warning and error text when the running total falls within a certain range. It also removes the text string if the budget is changed.

	$(".total_budget span").text(running_total);

});
