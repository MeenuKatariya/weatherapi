async function getData (city){
    var details= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b4e3fabab9e39d113c1e6ba63cc23b0`);
    var data = await details.json();
    displayData(data);
    console.log(data);
   
}


function searchWeather(){
    var searchedCity=document.getElementById('searchBar').value;
    // console.log(searchedCity);
    getData(searchedCity);
}

function displayData(cityWeather){
    document.querySelector("#container").innerHTML="";
    var div=document.createElement("div");
   

    var weatherDescription=document.createElement("p");
    weatherDescription.innerText= "weather Description : "+cityWeather.weather[0].description;
    var image=document.createElement("img");
    if(cityWeather.weather[0].description=="clear sky")
    {
       
        image.setAttribute("src","./clear.jpg")
    }else{
        // var img=document.createElement("img");
        image.setAttribute("src","./sun.jpg")

    }
    
   
    var temp=document.createElement("p");
    temp.innerText= "Temp :"+cityWeather.main.temp;
    temp.setAttribute("class","one")

    var pressure=document.createElement("p");
    pressure.innerText= "Pressure : "+cityWeather.main.pressure;
    pressure.setAttribute("class","one")

    var humidity=document.createElement("p");
    humidity.innerText= "Humidity : "+cityWeather.main.humidity;
    humidity.setAttribute("class","one")

    var windSpeed=document.createElement("p");
    windSpeed.innerText= "wind speed : "+cityWeather.wind.speed;
    windSpeed.setAttribute("class","one")

    var sunrise=document.createElement("p");
    sunrise.innerText= "sunrise : "+cityWeather.sys.sunrise;
    sunrise.setAttribute("class","one")

    var sunset=document.createElement("p");
    sunset.innerText= "sunset : "+ cityWeather.sys.sunset;
    sunset.setAttribute("class","one")

   
    div.append(weatherDescription,image, temp,pressure,humidity,windSpeed,sunrise,sunset,)
    document.querySelector("#container").append(div);

}