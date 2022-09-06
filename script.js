var ip = document.getElementById("ip");
let city = document.getElementById("city");
let state = document.getElementById("state");
var country = document.getElementById("country");
var capital = document.getElementById("countryCapital");
let postal = document.getElementById("postal");
var timezone = document.getElementById("timezone");
var population = document.getElementById("countryPopulation");
var currency = document.getElementById("countryCurrency")
 axios({
  method: 'get',
  url: 'https://ipapi.co/json/',
  responseType: 'json'
})
  .then(function (response) {
    console.log(response)
		var data = response.data;
		if(!data.city || data.city == null || data.city == "undefined"){
			city.innerHTML = "City: N/A";
		} else {
			city.innerHTML = `City: ${data.city}`
		};
		// if(!data.state || data.state == null || data.state == "undefined"){
		// 	state.innerText = "State: N/A"
		// } else {
		// 	state.innerText = `State: ${data.region} (${data.region_code})`;
		// };
		if(!data.postal || data.postal == null || data.postal == "undefined"){
			postal.innerHTML == "Postal Code: N/A"

		} else {
			postal.innerHTML = `Postal Code: ${data.postal}`
		}
    ip.innerHTML = `IP Address (IPv4): ${data.ip}`
		state.innerText = `State: ${data.region || 'N/A'} (${data.region_code || ""})`
		country.innerHTML = `Country: ${data.country_name} (${data.country_code_iso3 || ""})`
		capital.innerHTML = `Country Capital: ${data.country_capital}`
		population.innerHTML = `Country Population: ${data.country_population}`;
		currency.innerHTML = `Country Currency: ${data.currency_name} (${data.currency})`
		
		timezone.innerHTML = `Timezone: ${data.timezone}`
		
  });
