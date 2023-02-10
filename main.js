const getFormData = async (e) => {
    e.preventDefault();
    const zip_code = e.target.zip_code.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&units=imperial&appid=6892124a3615c8bed940245929cf532a`;

    const res = await fetch(url);
    const data = await res.json();
    const sky = data.weather[0].main;
    const current_temp = data.main.temp;
    const min_temp = data.main.temp_min;
    const max_temp = data.main.temp_max;
    const humidity = data.main.humidity;

    const weatherData = {
        sky: sky,
        current_temp: current_temp,
        min_temp: min_temp,
        max_temp: max_temp,
        humidity: humidity
    }

    console.log(weatherData);
};

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getFormData)