// Defining each element in index.html as a variable
let ip = document.getElementById("ip");
let city = document.getElementById("city");
let state = document.getElementById("state");
let country = document.getElementById("country");
let capital = document.getElementById("countryCapital");
let postal = document.getElementById("postal");
let timezone = document.getElementById("timezone");
let population = document.getElementById("countryPopulation");
let currency = document.getElementById("countryCurrency");

async function revealIpAddress() {
	if (document.getElementById("showIpAddress")) {
		const revealIpAddress = document.getElementById("showIpAddress");
		revealIpAddress.parentNode.removeChild(revealIpAddress);
		await axios.get(`https://api.valiantwind.dev/v1/get-ip-address`).then((response) => {
			document.getElementById("ip").innerHTML = "IP Address (IPv4): " + response.data
		}).catch((error) => {
			console.log(error)
			document.getElementById("ip").innerHTML = "IP Address: Could not fetch IP Address"
		})
	}
}

// Fetch the User's Location Details via the API used below with a GET Request
 axios({
  method: 'get',
  url: 'https://ipapi.co/json/',
  responseType: 'json'
})
  .then(function (response) {
    console.log(response)
		// Data from the Get Request
		var data = response.data;
		
		// Sometimes the city won't exist, so if shows as null or undefined, we'll replace it with "N/A"
		if(!data.city || data.city == null || data.city == "undefined"){
			city.innerHTML = "City: N/A";
		} else {
			city.innerHTML = `City: ${data.city}`
		};
		
		// Same thing as above except for the Postal Code
		if(!data.postal || data.postal == null || data.postal == "undefined"){
			postal.innerHTML == "Postal Code: N/A"
		} else {
			postal.innerHTML = `Postal Code: ${data.postal}`
		}

		//Last but not least, apply all the details fetched from the API used above to the elements
		state.innerText = `State: ${data.region || 'N/A'} (${data.region_code || ""})`
		country.innerHTML = `Country: ${data.country_name} (${data.country_code_iso3 || ""})`
		capital.innerHTML = `Country Capital: ${data.country_capital}`
		population.innerHTML = `Country Population: ${data.country_population}`;
		currency.innerHTML = `Country Currency: ${data.currency_name} (${data.currency})`
		
		timezone.innerHTML = `Timezone: ${data.timezone}`
  });

// Reloads the page when the refesh button is clicked
function refresh(){
	window.location.reload();
}