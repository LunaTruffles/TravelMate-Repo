//News and Weather API call
document.getElementById("weather").addEventListener('click', gettravelMate)













async function gettravelMate(e) {
    e.preventDefault()
































    await fetch (`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}&days=3&rapidapi-key=7d859b5d30mshfcc01545a8ec42ep1dfdebjsn453b001a9e5a`)
    .then((response) => {
        return response.json()
    })
    .then(something => { let cityInfo = {
        city: something.location.name,
        region: something.location.region,
        country: something.location.country,
        lat:  something.location.lat,
        lon: something.location.lon,
        temperatureF: something.current.temp_f,
        temperatureC: something.current.temp_c,
        condition: something.current.condition.text,
        image: something.current.condition.icon,
        uv: something.current.uv,
        }
        document.getElementById("outputCity").innerHTML = cityInfo.city
        document.getElementById("outputTemp").innerHTML = cityInfo.temperatureF
        document.getElementById("outputCon").innerHTML = cityInfo.condition
        document.getElementById("outputImg").src = cityInfo.image
        document.getElementById("outputUV").innerHTML = cityInfo.uv
        

    })
}