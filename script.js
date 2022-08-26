  var ip = document.getElementById("ip");
var browserName = document.getElementById("browserName");
var browserVersion = document.getElementById("browserVersion");
var userAgent = document.getElementById("userAgent");
var browserLanguage = document.getElementById("browserLanguage");
var isJavaEnabled = document.getElementById("isJavaEnabled");
 axios({
  method: 'get',
  url: 'https://api64.ipify.org',
  responseType: 'stream'
})
  .then(function (response) {
    console.log(response)
    ip.innerText = `IP Address (IPv4): ${response.data}`
  });

//browserName.innerHTML = `${navigator.appName}`
browserVersion.innerHTML = `${navigator.appVersion}`
browserLanguage.innerHTML = `${navigator.language}`
userAgent.innerHTML = `${navigator.userAgent}`


var connection = navigator.connection

console.log(connection)
console.log(navigator.userAgent)

//  axios({
//   method: 'post',
//   url: 'https://api.whatismybrowser.com/api/v2/user_agent_parse',
//   responseType: 'stream',
//   headers: {'X-API-KEY': 'd7a627cd5d42e3c5cd138f8992ea9083'}
// })
//   .then(function (response) {
//     console.log(response)
//   });

