
// dispaly weather data
const displayWeatherData=data=>{
    console.log(data);
    const displayWeather=document.getElementById("display-weather");
    displayWeather.innerHTML=`
        <span class="fs-1 text-bold"><i class="fas fa-cloud-${data.weather[0].main=='rain'?'rain':'sun'}"></i></span>
        <h1 class="fs-1">${data.name}</h1>
        <h3 class="fs-2">${(data.main.temp-273.15).toFixed(1)}<sup>o</sup>C</h3>
        <p class="fs-4">${data.weather[0].main}</p>
    ` 
}

// load weather data
const loadSearchInput=async ()=>{
        const searchInput=document.getElementById('search-field');
        const serchInputValue=searchInput.value;
        searchInput.value='';
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${serchInputValue}&appid=d741eab6dd28c642f435b46f36fbe4d0`);
        const data=await res.json();
        if(data.cod>=400 && data.cod<500){
            const displayWeather=document.getElementById("display-weather");
            displayWeather.innerHTML=`
                <h3 class="fs-2">Something wrong.plasse try agine</h3>
            ` 
        }
        else{
            displayWeatherData(data)
        }  
}
