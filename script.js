  var ip = document.getElementById("ip");
var batteryLevel = document.getElementById("batteryLevel");
var deviceMemory = document.getElementById("memory");
 axios({
  method: 'get',
  url: 'https://api64.ipify.org',
  responseType: 'stream'
})
  .then(function (response) {
    console.log(response)
    ip.innerText = `IP Address (IPv4): ${response.data}`
  });

deviceMemory.innerHTML = `Device Memory: ${deviceMemory} MB`
batteryLevel.innerHTML = `${navigator.appVersion}`


var connection = navigator.connection

var battery = navigator.getBattery().then(battery => {
  batteryLevel.innerHTML = `Battery Level: ${battery.level * 100}%`
  console.log(battery.charging)
  console.log(battery.level * 100)
})

console.log(connection)

console.log(navigator.deviceMemory)
