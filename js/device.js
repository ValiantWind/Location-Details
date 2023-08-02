let networkType = document.getElementById("NetworkType");
let deviceMemory = document.getElementById("deviceMemory")

networkType.innerHTML = "Network Type: " + navigator.connection.type;
deviceMemory.innerHTML = `Device Memory: At least ${navigator.deviceMemory} GiB of RAM`
