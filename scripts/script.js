const APIKEY = "a4707dcbaf2efaeaa61c9d8f34df5303";
const buttonSearch = document.getElementById("buscar");
const resultElement = document.getElementById("resultado");
const inputBusqueda = document.getElementById("inputBusqueda");
const previousSearches = document.getElementById("busquedasAnteriores");
const videoElement = document.getElementById("videoElement");
let videoFondo = "";
let resultado = "";
let busquedasAnteriores = "";
let arr;

// Otras funciones

function ocultarHero() {
  var element = document.getElementById("hero");
  element.classList.add("hidden");
}

function mostrarTitleBusquedasAnteriores() {
  var element = document.getElementById("titleBusquedasAnteriores");
  element.classList.remove("hidden");
}

function mostrarDivResultado() {
  var element = document.getElementById("resultado");
  element.classList.remove("hidden");
}

buttonSearch.addEventListener("click", (event) => {
  event.preventDefault();
  ocultarHero();
  mostrarDivResultado();

  fetch(
    `https://pro.openweathermap.org/data/2.5/weather?q=${inputBusqueda.value}&APPID=${APIKEY}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json.cod === 200) {
        resultado += `<div
        class="w-72 -mt-32 mx-auto border bg-transparent b-gray-900 rounded flex flex-col justify-center items-center text-center p-6 lg:-mt-48">
        <div class="text-md font-bold flex flex-col text-white"><span>${
          json.name
        }, ${json.sys.country}</span></div>
        <div class="w-32 h-32 flex items-center justify-center">
            <img src="http://openweathermap.org/img/w/${
              json.weather[0].icon
            }.png"
                alt="${json.weather[0].description}"></img>
        </div>
        <p class="font-extrabold text-6xl text-white mb-6">${json.main.temp.toFixed()}º</p>
        <p class="mb-2 text-gray-100">${json.weather[0].main}</p>
        <div class="text-3xl font-bold text-gray-300 mb-6">
            ${json.main.temp_min.toFixed()}º
            <span class="font-normal text-gray-300 mx-1">/</span>
            ${json.main.temp_max.toFixed()}º
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="mx-auto flex items-center text-gray-400 px-2 mb-5">
                <svg class="mr-2 w-4 h-4" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Desktop-HD" transform="translate(-120.000000, -479.000000)" fill="#60A2D7"
                            fill-rule="nonzero">
                            <g id="Group" transform="translate(95.000000, 222.000000)">
                                <g id="Group-3" transform="translate(25.000000, 256.774194)">
                                    <g id="028-drop" transform="translate(0.000000, 0.225806)">
                                        <path
                                            d="M11,11.9334341 C11,15.0552582 8.53750272,17.5862069 5.5,17.5862069 C2.46249728,17.5862069 0,15.0552582 0,11.9334341 C0,7.58026159 5.5,0 5.5,0 C5.5,0 11,7.58026159 11,11.9334341 L11,11.9334341 Z"
                                            id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                ${json.main.humidity}%
            </div>
            <div class="mx-auto flex items-center text-gray-400 px-2 mb-5">
                <svg class="mr-2 h-4 w-4" viewBox="0 0 12 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Desktop-HD" transform="translate(-201.000000, -480.000000)" fill="#0ABDE3"
                            fill-rule="nonzero">
                            <g id="Group" transform="translate(95.000000, 222.000000)">
                                <g id="Group-3" transform="translate(25.000000, 256.774194)">
                                    <g id="wind"
                                        transform="translate(87.500000, 11.225806) rotate(-90.000000) translate(-87.500000, -11.225806) translate(77.000000, 5.225806)">
                                        <g id="w25">
                                            <path
                                                d="M16.222113,3.9997453 C16.1020238,4.11833549 16.0351226,4.28256699 16.0372726,4.45349848 C16.0394226,4.62442997 16.1104323,4.78683812 16.2334644,4.90221395 C16.6379853,5.28943966 17.0750123,5.74649295 17.5388698,6.22999608 C17.7684767,6.47016066 18.06,6.8515674 18.2916708,7.08908699 C16.7035135,7.07321708 16.0399754,7.11553683 15.1586978,7.07639107 C14.8000983,7.05999216 14.595258,7.23032915 14.595258,7.58264107 C14.595258,7.93442398 14.7443735,8.11216693 15.1034889,8.11216693 C15.9563882,8.11216693 16.7896806,8.06878918 18.3881572,8.08571708 C17.6494273,8.82722969 16.9039897,9.56168541 16.151941,10.288989 C16.0291152,10.4045196 15.9582985,10.5669407 15.9562468,10.737822 C15.9541952,10.9087034 16.0210908,11.0728624 16.1411057,11.1914577 C16.3966491,11.4436893 16.7995644,11.4483255 17.0605651,11.2020376 C18.1048894,10.2022335 19.4185504,8.91148119 20.2957002,8.02805643 C20.4143735,7.90850313 20.5072482,7.74874608 20.5072482,7.58264107 L20.5072482,7.56465517 C20.5072482,7.39273119 20.3988943,7.22927116 20.2699017,7.11236285 C19.7188452,6.6151058 19.092457,5.97501959 18.5001229,5.35662226 C18.0589126,4.89113359 17.6081986,4.43521373 17.1482801,3.98916536 C16.8847573,3.74276899 16.4802155,3.74739022 16.222113,3.9997453 L16.222113,3.9997453 Z"
                                                id="Path"></path>
                                            <path
                                                d="M0,7.255721 C0,7.04623824 0.165110565,6.87695925 0.369434889,6.87695925 L18.7214742,6.87695925 C18.9252826,6.87695925 19.0909091,7.04623824 19.0909091,7.255721 L19.0909091,8.08518809 C19.0909091,8.29467085 18.9257985,8.46394984 18.7214742,8.46394984 L0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,7.255721 Z"
                                                id="Path"></path>
                                            <path
                                                d="M0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,0.378761755 C0,0.169278997 0.165110565,0 0.369434889,0 L1.17847666,0 C1.38228501,0 1.54791155,0.169278997 1.54791155,0.378761755 L1.54791155,8.08518809 C1.54791155,8.29414185 1.38280098,8.46394984 1.17847666,8.46394984 L0.369434889,8.46394984 Z"
                                                id="Path"></path>
                                        </g>
                                        <path
                                            d="M4.108,8.53448276 C3.91028206,8.53448276 3.75,8.3634922 3.75,8.15256466 L3.75,0.381918103 C3.75,0.170689655 3.91,0 4.108,0 L4.892,0 C5.0895,0 5.25,0.170689655 5.25,0.381918103 L5.25,8.15256466 C5.25,8.3632597 5.09,8.53448276 4.892,8.53448276 L4.108,8.53448276 Z"
                                            id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                ${json.main.feels_like.toFixed()}º
            </div>
            <div class="mx-auto flex items-center text-gray-400 px-2">
                <svg class="mr-2 h-4" id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 384">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: #60a2d7;
                            }
                        </style>
                    </defs>
                    <g id="Capa_1-2" data-name="Capa 1-2">
                        <g>
                            <path class="cls-1"
                                d="M243.35,384c-7.86-2.26-16.22-3.46-23.48-6.97-27.33-13.19-41.73-35.4-43.08-65.83-.41-9.27,6.27-16.22,14.88-16.24,8.45-.02,14.77,6.64,15.01,15.82,.59,22.84,18.42,41.69,40.81,43.13,22.97,1.48,43.22-14.89,46.62-37.68,3.79-25.48-15.88-49.21-41.61-50.1-4.98-.17-9.98-.07-14.97-.07H17.12c-8.92,0-14.7-4.06-16.62-11.57-2.21-8.68,4.04-17.55,12.94-18.32,1.24-.11,2.49-.1,3.74-.1,77.34,0,154.68-.04,232.02,0,36.8,.03,66.34,23.88,73.8,59.41,8.66,41.19-20.54,82.37-62.24,87.8-.82,.11-1.62,.47-2.42,.71h-14.99Z" />
                            <path class="cls-1"
                                d="M383.35,140.25c-.85,4.01-1.51,8.08-2.59,12.04-8.79,32.32-37.69,54.64-71.24,54.68-77.85,.1-155.71,.04-233.56,.02-9.38,0-16.08-6.4-16.02-15.12,.07-8.7,6.77-14.86,16.27-14.86,77.35,0,154.71,0,232.06,0,23.36,0,41.23-15.44,44.78-38.54,3.61-23.52-15.44-47.48-39.11-49.21-26.4-1.92-47.03,16.4-48.31,42.89-.47,9.81-6.75,16.09-15.77,15.76-8.65-.32-14.51-7.09-14.08-16.82,.23-5.09,.72-10.26,1.88-15.2,7.93-33.74,39.45-59.22,77.79-56.7,33.47,2.2,62.6,29.56,67.21,64.03,.09,.7,.45,1.37,.68,2.06v14.98Z" />
                            <path class="cls-1"
                                d="M149.77,0c4.23,.95,8.51,1.7,12.67,2.88,32.65,9.3,55.31,40.38,53.69,73.51-1.73,35.34-26.36,64.06-60.52,70.36-4.15,.76-8.43,1.11-12.64,1.11-42.41,.09-84.83,.1-127.24,.04-11.1-.02-18.28-9.76-14.86-19.8,2.1-6.14,7.58-9.99,14.7-10.15,4.86-.1,9.73-.03,14.6-.03,37.18,0,74.35,.06,111.53-.03,21.07-.05,38.36-13.59,43.24-33.54,5.82-23.77-8.68-47.25-32.87-53.24-22.71-5.62-46.67,9.07-52.31,32.2-.85,3.49-1.18,7.14-1.42,10.74-.58,8.72-6.89,15.06-15.1,14.95-8.49-.12-14.9-7.03-14.84-16.01,.19-30.33,19.99-58.31,48.79-68.49,5.7-2.01,11.74-3.05,17.63-4.54h14.97l-.02,.04Z" />
                        </g>
                    </g>
                </svg>
                ${json.wind.speed} km/h
            </div>
            <div class="mx-auto flex items-center text-gray-400 px-2">
            <svg class="mr-2 h-4" id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
            <defs>
                <style>
                .cls-1 {
                    fill: #60a2d7;
                }
                </style>
            </defs>
            <g id="Capa_1-2" data-name="Capa 1-2">
                <g>
                <path class="cls-1" d="M169.92,384c-5.17-2.56-6.99-6.71-6.83-12.46,.31-10.83,.09-21.68,.09-32.97-1.68,0-3.02,.03-4.36,0-8.75-.2-13.87-5.29-13.98-14.11-.11-8.12-.17-16.25,.05-24.37,.09-3.15-.94-4.49-3.94-5.54-15.77-5.53-30.15-13.66-43.21-24.12-3.55-2.84-4.31-5.79-2.22-8.64,2.15-2.94,5.46-3.09,9.15-.17,19.78,15.69,42.11,25.68,67.06,29.23,61.18,8.71,118.77-21.63,146.49-76.83,38.84-77.33-2.88-173.26-85.82-197.07-7.63-2.19-15.55-3.43-23.38-4.85-4.54-.82-7.11-2.97-6.71-6.39,.43-3.69,3.4-5.44,8.24-4.81,31.96,4.12,60.25,16.59,83.86,38.61,36.32,33.88,53.7,76.14,48.72,125.51-6.35,62.96-40.7,106.03-99.29,129.55-3.13,1.26-4.08,2.66-3.97,5.9,.25,7.49,.09,14.99,.08,22.49-.03,10.61-4.66,15.38-15.13,15.63-.97,.02-1.94,.16-3.24,.26,0,11.26,.03,22.35-.03,33.44,0,1.85,.17,4.07-.74,5.45-1.57,2.36-3.94,4.2-5.97,6.26h-44.92Zm-13.77-84.7c0,8.95-.08,17.51,.15,26.06,.02,.68,2.14,1.88,3.3,1.88,21.8,.11,43.61,.05,65.41,.12,2.72,0,3.78-.96,3.74-3.71-.11-7.36-.03-14.73-.06-22.09,0-.67-.31-1.35-.5-2.16-24,5.77-47.8,5.69-72.03-.11h-.01Zm18.42,73.2h35.62v-33.69h-35.62v33.69Z"/>
                <path class="cls-1" d="M187.13,0c2.8,1.67,4.7,3.92,3.59,7.37-1.05,3.25-3.81,3.8-6.89,3.99C117.11,15.48,62.79,65.24,53.47,131.8c-5.83,41.62,5.19,78.9,32.16,111.28,.72,.86,1.47,1.7,2.14,2.6,2.11,2.81,1.98,6.04-.3,8.08-2.37,2.12-6.02,1.96-8.24-.95-5.83-7.62-12.09-15.02-16.98-23.23C13.1,146.93,51.63,40.31,142.28,8.5c11.06-3.88,22.99-5.27,34.51-7.82,.95-.21,1.9-.46,2.85-.69h7.49Z"/>
                <path class="cls-1" d="M314.21,151.9c-1.11,59.01-43.6,109.28-101.6,119.36-65.21,11.33-128.31-33.43-139.34-98.85C61.94,105.25,106.56,42.86,173.59,32.14c51.33-8.21,102.28,17.61,126.13,63.93,.17,.33,.36,.66,.52,1,1.76,3.68,1.01,6.92-1.95,8.43-2.95,1.5-5.82,.07-8.04-3.23-5.84-8.66-10.9-18.15-18.06-25.58-30.44-31.58-67.73-42.3-109.71-30.35-42.16,12.01-68.58,41.03-77.53,84.02-13.01,62.48,30.72,122.48,93.85,130.5,59.37,7.55,114.35-34.93,122.3-94.43,1.83-13.67,1.12-27.15-2.16-40.53-.09-.36-.16-.73-.25-1.1-1.08-4.8,.06-7.66,3.42-8.58,3.75-1.03,6.64,.98,7.55,6.13,1.73,9.81,3.06,19.69,4.56,29.54h0Z"/>
                <path class="cls-1" d="M197.99,74.31c0,5.72,.03,10.95-.02,16.17-.02,1.49,0,3.07-.49,4.43-.97,2.7-3.16,3.79-5.95,3.4-2.86-.4-4.51-2.25-4.63-5.05-.19-4.74-.11-9.49-.14-14.24v-4.68c-17.21,1.48-31.83,7.58-45.19,18.86,3.53,3.43,6.9,6.69,10.25,9.96,1.07,1.05,2.18,2.07,3.12,3.23,2.08,2.56,2,5.66-.31,7.74-2.36,2.12-5.04,2.29-7.4,.12-3.58-3.29-7.03-6.74-10.42-10.23-.94-.97-1.49-2.32-2.39-3.78-11.7,13.96-17.95,28.67-19.28,45.96,5.96,0,11.54-.02,17.12,0,4.35,.02,6.95,2.14,6.93,5.58,0,3.45-2.61,5.62-6.94,5.65-5.58,.05-11.16,0-17.05,0,.65,10.66,3.39,20.31,8.14,29.31,2.43,4.61,5.45,8.93,8.42,13.24,2.59,3.75,2.75,6.68,.03,8.96-2.7,2.27-6.19,1.55-8.95-2.06-20.58-26.95-25.11-56.64-12.54-87.92,12.71-31.64,36.49-50.84,70.62-55.22,48.03-6.16,89.95,24.9,98.72,72.95,4.73,25.95-1.54,49.55-17.83,70.39-1.87,2.4-4.06,3.75-7.09,2.85-3.88-1.14-4.91-5.8-1.99-9.48,7.16-9.04,12.18-19.14,14.88-30.34,.96-3.98,1.48-8.06,2.31-12.67-6.24,0-11.94,.19-17.62-.11-1.91-.1-4.32-1-5.46-2.39-1-1.22-1.26-4.04-.51-5.41,.84-1.54,3.13-3.05,4.89-3.17,5.94-.39,11.92-.15,18.38-.15-1.27-17.22-7.52-31.89-18.69-45.33-4.21,4.29-8.1,8.64-12.45,12.47-1.53,1.35-4.34,2.25-6.3,1.89-4.09-.74-5.11-5.96-1.93-9.28,4.05-4.23,8.36-8.23,12.97-12.73-13.12-11.26-27.82-17.33-45.2-18.91v-.02Z"/>
                <path class="cls-1" d="M179.16,131.52c11.31-5.56,21.6-5.06,30.51,3.93,7.42,7.49,8.29,17.39,2.93,29.38,8.12,8.13,16.31,16.33,24.51,24.53,.88,.88,1.79,1.74,2.64,2.65,2.69,2.9,2.85,6.33,.44,8.63-2.39,2.27-5.48,2.1-8.31-.61-2.88-2.77-5.65-5.64-8.47-8.47-5.64-5.65-11.33-11.26-16.91-16.98-1.46-1.5-2.55-1.98-4.74-1.01-9.14,4.01-19.34,1.95-26.24-4.94-6.91-6.9-8.92-17-4.92-26.27,.95-2.2,.48-3.36-1.05-4.79-2.73-2.56-5.37-5.22-7.94-7.94-2.69-2.85-2.78-5.91-.42-8.3,2.25-2.28,5.64-2.23,8.32,.37,3.31,3.2,6.46,6.57,9.63,9.82h.02Zm13.31,32.8c6.94-.04,12.6-5.76,12.53-12.66-.06-6.93-5.78-12.52-12.74-12.47-6.96,.06-12.6,5.76-12.53,12.67,.07,6.93,5.76,12.49,12.74,12.45h0Z"/>
                </g>
            </g>
            </svg>
                ${json.main.pressure} hPa
            </div>
            </div>
            <button
            class="rounded-md mt-5 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit" onclick="location.reload();">Volver a buscar
            </button>
        </div>`;

        // Coloco un video de youtube con iframe de fondo en función del clima con switch
        switch (json.weather[0].main) {
            case "Clear":
                videoFondo = "https://www.youtube.com/embed/aSk-D86aOtc?autoplay=1&mute=1&controls=0&loop=1";
                break;
            // case "Clouds":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Rain":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Drizzle":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Thunderstorm":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Snow":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Mist":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Smoke":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Haze":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&mute=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Dust":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            // case "Fog":
            //     videoFondo = "https://www.youtube.com/embed/1VQ_3sBZEm0?autoplay=1&controls=0&loop=1&playlist=1VQ_3sBZEm0";
            //     break;
            }

        // Pongo el video de fondo
        videoFondo = `
        <video autoplay loop muted class="absolute z-10 w-auto">
            <source src="${videoFondo}" type="video/mp4" />
            Your browser does not support the video tag.
        </video>`;

        if (!localStorage.weather) {
          arr = [];
        } else {
          arr = JSON.parse(localStorage.getItem("weather"));
        }

        arr.push(json);
        localStorage.setItem("weather", JSON.stringify(arr));

        //   console.log(arr);

        // Verifico que el array tenga elementos
        if (arr.length > 0) {
          mostrarTitleBusquedasAnteriores();

          for (let i = 0; i < arr.length; i++) {
            busquedasAnteriores += `
                <div class="mx-auto border bg-transparent b-gray-900 rounded flex flex-col justify-center items-center text-center p-6 mt-10 mb-10">
                    <div class="text-sm font-bold flex flex-col text-white">
                        <span>${arr[i].name}, ${arr[i].sys.country}</span>
                    </div>
                    <div class="w-32 h-32 flex items-center justify-center">
                        <img src="http://openweathermap.org/img/w/${
                          arr[i].weather[0].icon
                        }.png"
                            alt="${arr[i].weather[0].description}" />
                    </div>
                    <p class="font-extrabold text-white mb-6">${arr[
                      i
                    ].main.temp.toFixed()}º</p>
                    <p class="mb-2 text-gray-100">${arr[i].weather[0].main}</p>
                    <div class=" font-bold text-gray-300 mb-6">
                        ${arr[i].main.temp_min.toFixed()}º
                        <span class="font-normal text-gray-300 mx-1">/</span>
                        ${arr[i].main.temp_max.toFixed()}º
                    </div>
                </div>`;
          }
        }
      } else {
        resultado += `<div
        class="w-72 -mt-32 mx-auto border bg-transparent b-gray-900 rounded flex flex-col justify-center items-center text-center p-6 lg:-mt-48">
            <p class="text-white ">No se encuentra la ciudad. Inténtelo nuevamente.</p> 
            <button
            class="rounded-md mt-5 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit" onclick="location.reload();">Reintentar
            </button>
        </div>`;
      }

      resultElement.innerHTML = resultado;
      previousSearches.innerHTML = busquedasAnteriores;
      videoElement.innerHTML = videoFondo;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally((final) => {
      inputBusqueda.value = "";
    });
});
