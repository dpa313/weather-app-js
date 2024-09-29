const searchInput = document.querySelector(".search-input")

const API_KEY = "b71f2c6d324e410893494324242909"

const getWeatherDetails = async (cityName) =>{
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;

    try{
        // fetch data from api and parse the response as json
        const response = await fetch(API_URL)
        const data = await response.json()
        
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

// Handle user input in the searchbox
searchInput.addEventListener('keyup', (e) =>{
    const cityName = searchInput.value.trim()

    if(e.key == "Enter" && cityName){
        getWeatherDetails(cityName)
    }
})