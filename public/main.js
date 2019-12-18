let latitude = 42.35
let longitude = -71.07

// your code, here
let display = document.getElementById('main')
fetch(`/api/v1/forecast/${latitude},${longitude}`)
	.then(response => response.json())
	.then(awesome => {
	  console.log(awesome.daily.summary)
	  display.innerHTML += awesome.daily.summary
	 })
// fetch(`/api/v1/forecast/${latitude},${longitude}`)
//     .then((response) => {
//       // console.log({response})
// 	    if (response.status == 200) {
// 	      return response.json()
// 	    } else {
// 	      throw new Error(response.statusText)
// 	    }
// 	  })
// 	  .then((json) => {
// 	    // console.log({json})
// 	    mainDiv.innerHTML ='<canvas id="skycon" width="128" height="128"></canvas>'
// 	    mainDiv.innerHTML += json.currently.temperature + ' °F'
// 	    let skycon = new Skycons()
// 	    skycon.add(document.getElementById("skycon"), json.currently.icon)
// 	  })
// 	  .catch((error) => {
// 	    mainDiv.innerHTML += '<div class="error">Something went wrong</div>'
// 	    mainDiv.innerHTML += `<div class="error">${error.toString()}</div>`
// 	  })
