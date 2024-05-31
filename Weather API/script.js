const fetchData = async (event) => {
  event.preventDefault();
  const token = "567712d46fe114f793e9b0c03bc9b8b9";
  try {
    const cityInput = document.getElementById("cityInput").value;
    // const res = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInput}&appid=${token}`
    // );
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${token}`
    );
    const data = await res.json();
    console.log(data);

    const timestamp = data.list[0].dt;
    const date = new Date(timestamp * 1000);

    // const theDate = date.toUTCString();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDay = daysOfWeek[date.getDay()];
    document.getElementById("presentDay").innerHTML = currentDay;
    presentDay = currentDay;

    // const tomorrow = daysOfWeek[.getDay()]

    // document.getElementById("firstday").innerHTML = data.city.country;
    // firstday = data.city.country;

    function Days(day, temperature, weather) {
      this.day = day;
      this.temperature = temperature;
      this.weather = weather;
    }

    const dayArray = [];

    data.list.forEach((item) => {
      const dtTxt = item.dt_txt;
      const time = dtTxt.split(" ")[1];

      const dayString = dtTxt.split(" ")[0];
      const date = new Date(dayString);
      // const day = date.getDay();
      const day = daysOfWeek[date.getDay()];

      if (time === "00:00:00") {
        const tempe = item.main.temp;
        const temperature = Math.round(tempe - 273.15);
        const weather = item.weather[0].main;
        dayArray.push(new Days(day, temperature, weather));
      }
    });
    console.log(dayArray);
    document.getElementById("firstday").innerHTML = dayArray[0].temperature;
    document.getElementById("secondday").innerHTML = dayArray[1].temperature;
    document.getElementById("thirdday").innerHTML = dayArray[2].temperature;
    document.getElementById("fourthday").innerHTML = dayArray[3].temperature;

    document.getElementById("day_1").innerHTML = dayArray[0].day;
    document.getElementById("day_2").innerHTML = dayArray[1].day;
    document.getElementById("day_3").innerHTML = dayArray[2].day;
    document.getElementById("day_4").innerHTML = dayArray[3].day;

    // document.getElementById("day_1Image").innerHTML = dayArray[0].weather;
    // document.getElementById("day_2Image").innerHTML = dayArray[1].weather;
    // document.getElementById("day_3Image").innerHTML = dayArray[2].weather;
    // document.getElementById("day_4Image").innerHTML = dayArray[3].weather;

    for (let i = 0; i <= 3; i++) {
      if (dayArray[i].weather === "Clouds") {
        document.getElementById("day_1Image").src = "./assets/cloudy.png";
      } else if (dayArray[i].weather === "Clouds") {
        document.getElementById("day_2Image").src = "./assets/cloudy.png";
      } else if (dayArray[i].weather === "Clouds") {
        document.getElementById("day_2Image").src = "./assets/cloudy.png";
      } else if (dayArray[i].weather === "Clouds") {
        document.getElementById("day_2Image").src = "./assets/cloudy.png";
      }
    }

    // for (let i = 0; i < 30; i++) {
    //   const dtTxt = data.list[i];
    //   const time = dtTxt.split(" ")[1].dt_txt;
    //   // if (time === "00:00:00") {
    //   //   console.log(time);
    //   // }
    //   console.log(time);
    // }

    if (data.list[0].weather[0].main === "Rain") {
      document.getElementById("presentDayImage").src = "./assets/Rain.png";
    } else if (data.list[0].weather[0].main === "Clouds") {
      document.getElementById("presentDayImage").src = "./assets/cloudy.png";
    }

    document.getElementById("condition").innerHTML =
      data.list[0].weather[0].main;
    condition = data.list[0].weather[0].main;
    document.getElementById("place").innerHTML = data.city.name;
    place = data.city.name;
    document.getElementById("temp").innerHTML = Math.round(
      data.list[0].main.temp - 273.15
    );
    // temp = Math.round(data.main.temp - 273.15);
  } catch (error) {
    console.log("There was an error in fetching the data!!");
  }
};
fetchData();
