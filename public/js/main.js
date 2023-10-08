const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
// const tempMood = arrData[0].weather[0].main;
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
 event.preventDefault();
//  to avoid refreshing page
let cityval = cityName.value;
if (cityval === ''){
    city_name.innerText = `please write the name before search`;
    datahide.classList.add('data_hide');

}
else{
    // to write correct text use try catch as it will return resolve or reject i.e resolve for try and reject for catch
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=637eb359e238c72baaf8b6edd10a7679`
    const response = await fetch(url);
    // to change the response in pure js as we recieve reponse in form of json
    const data = await response.json();
    const arrData = [data];
    city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
    temp_real_val.innerText = arrData[0].main.temp;
    // temp_status.innerText = arrData[0].weather[0].main;
    const tempMood = arrData[0].weather[0].main;
    // to bring weather emoji
    if (tempMood == "Clear" ){
        temp_status.innerHTML = 
        "<i class = 'fas  fa-sun' style='color: #eccc68;'></i>";
    } else if (tempMood =="Clouds"){
        temp_status.innerHTML = "<i class='fas fa-cloud style='color': #f1f2f6;' ></i>";
    }
    else if (tempMood == "Rain"){
        temp_status.innerHTML = "<i class='fas fa-cloud-rain style='color': #a4b0be;' ></i>";
    }
    else{
        temp_status.innerHTML = "<i class='fas fa-sun style='color': #eccc68;' ></i>";
    }
    datahide.classList.remove('data_hide');
}
catch{
    
    city_name.innerText = `please enter a valid city name`;
    datahide.classList.add('data_hide');

}
}
}
submitBtn.addEventListener('click',getInfo);
