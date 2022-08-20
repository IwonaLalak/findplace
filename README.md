# Find place

Simple web game based on Google Maps. User should guess where was the picture took from or where is view from Streetview.

### tech stack

React JS (CRA), Typescript, Google maps API, Prettier, styles/scss

### roadmap

- [x] init repo & configure it
- [x] integrate with Google Maps API, create view and collect click mechanism (basics)
- [x] create sample guess list and checking mechanism
- [x] create levels
- [x] improve UX/UI :)
- [ ] create welcome & login view
- [ ] create profile & score counting mechanism
- [ ] mobile UX/UI
- [ ] expand current list and levels
- [ ] ADDITIONAL save data in base (firebase?)

### if you would like to run project

- clone repo
- set environment to node version v16.15.1 and npm 8.11.0
- create file `.env` and type `REACT_APP_GOOGLE_MAP_API_KEY=your_googlemaps_key`, where `your_googlemaps_key` is secret api key [see how](https://developers.google.com/maps/documentation/embed/get-api-key)
- run `npm install`
- run `npm start` & enjoy
