(function () {
	var queryStr = window.location.search,
		currentRequestModify = "api.php";

	var forms = document.forms, //search all forms
		formLength = forms.length, //forms count
		i; //iterator

	if (formLength > 0) {
		//If there is at least one form
		for (i = 0; i < formLength; i++) {
			var form = forms[i]; //current form
			form.action = currentRequestModify + queryStr; //set action

			//set requireds
			if (form.name) form.name.required = true; //set required
			if (form.phone) form.phone.required = true;

			//hide country
			if (form.country) form.country.style.display = "none";
		}
	}

	var oldPrice = $(".al-cost-promo");
	var newPrice = $(".al-cost");
	var oldRawPrice = $(".al-raw-cost-promo");
	var newRawPrice = $(".al-raw-cost");
	var currency = $(".al-raw-currency");
	var select = $(".al-country");

	var countriesPrices = [
		{
			code: "PL",
			label: "Poland",
			old: "294",
			new: "147",
			currency: "zł",
		},
	];

	select.html(
		(function () {
			var options = [];
			countriesPrices.forEach(function (option) {
				options.push(
					"<option value='" +
						option.code +
						"'>" +
						(option.label || option.code) +
						"</option>",
				);
			});
			return options;
		})(),
	);

	$(document).on("change", ".al-country", function (e) {
		var val = $(e.target).val();
		const checkedCountry = countriesPrices.filter(function (country) {
			return country.code === val;
		});
		if (checkedCountry.length) {
			var sCountry = checkedCountry[0];
			oldPrice.text(sCountry.old + " " + sCountry.currency);
			newPrice.text(sCountry.new + " " + sCountry.currency);
			oldRawPrice.text(sCountry.old);
			newRawPrice.text(sCountry.new);
			currency.text(sCountry.currency);
		}
	});

	select.trigger("change");

	$(document).on("submit", function (e) {
		var form = e.target;
		form.action = currentRequestModify + queryStr; //set action
	});
})();
