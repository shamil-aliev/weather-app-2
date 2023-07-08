# React Weather-app

## Description

Welcome to my first React project! This is a weather app made using ReactJS library, which uses Fetch API to get data from https://www.weatherapi.com/. 

It allows you to get information about current weather, description of current weather and also hourly forecast for current day and daily weather forecast for the next two days in different cities. To display a weather type desired city name in search bar and click 'Search' button.

Initially the app will display a weather in your current city. Make sure you have enabled access for your geoposition. 

## Instructions 

To run the app on your local machine download the code and then in terminal type:

1. npm i (will download needed packages)

2. npm run dev (will run the app on localhost)

Also you can choose what exact hours you would like to display in hourly forecast simply modifying the array at 'src/utils/Hours.jsx' adding or removing hours from 0-23 range (should be in 24h format). 

### Further updates

I would like to add auto complete to a search bar, so it would display possible outputs while user is typing the city name
