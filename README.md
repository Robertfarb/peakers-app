# Fullstack Application for Peakers.AI

This is a fullstack application created for Peakers.AI.

This README covers

- [Setup](setup)
- [Features](features)
- [Technologies](Technologies)
- [Future Features](Future&%20Features)

## Setup
1) Unzip the compressed folder
2) run `rails db:setup`
3) Configure Google Maps API key:
  - run `EDITOR=VIM bin/rails credentials:edit`
  - insert:
    ```yml
    google_maps:
      api_key: YOUR_API_KEY_HERE
    ```
  - Now the rails app is setup to use your API_KEY everywhere necessary
3) run `npm install`
4) run `bundle install`

## Features
This application integrates the Google Maps geocoder API to geocode addresses into lat/lng
coordinates, and drops a pin on a google maps component where the user indicates. The app
also reverse geocodes lat lng into address and drops a pin on the map. Finally, I use the Haversine,
formula to return the distance (as the crow flies) between two pairs of Lat/Longs.


## Technologies
This app was built using Rails and PostgreSQL for the backend, and React.js on the frontend. Rails was chosen for the backend becuase of it's powerful features out of the box, and react/redux on the frontend to get more experience working with a framework that is intednded for high scalability.


## Ideas for future features
  - Show the distance between to lat/lng coords on a map and drop the pins and optional routes drawn on the map
  - Display the time traveled via walking, jogging, running, biking between two addresses.