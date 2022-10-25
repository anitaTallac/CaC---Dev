const API_KEY = `2c560acdc528b2dd8e9aeef93173a3a3`;
const fetchData = position => {
    const {latitude, longitude}= position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
       
        .then(response => response.json())
        .then(data => setWheatherData(data))
}
    
const setWheatherData = data => {
    console.log(data);
    const WheatherData = {
        Location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),
        

    }
    Object.keys(WheatherData).forEach( key => {
        document.getElementById(key).textContent = WheatherData[key];
    });

    cleanUp();
    

}
 
const cleanUp = () =>{
    let container = document.getElementById("container");
    let loader = document.getElementById("loader");

    loader.style.display = "none";
    container.style.display = "flex";
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
 }   


const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);

}