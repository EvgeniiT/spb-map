# Super Popular Bar Map

## Description
This is project for Front End Nano Degree by [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)
It is React App for searching a bar in New York City.
You need to input name of the bar into search box and then click on element of list.
Marker on the map will change color and infowindow will appear on the map.
You can show and hide menu by clicking on hamburger icon.
## Main features
* Interface Design
  * **Responsiveness** All application components render on-screen in a responsive manner.
  * **Usability** All application components are usable across modern desktop, tablet, and phone browsers.
* Application Functionality
  * **Location Filter** Includes a text input field that filters the map markers and list items to locations matching the text input.
  * **List View** A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied. Clicking a location on the list displays unique information about the location, and animates its associated map marker with color change.
  * **Map and Markers** Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied. Clicking a marker displays unique information about a location inside an infoWindow.
* Asynchronous Data Usage
  * **Asynchronous API Requests** Application utilizes the Google Maps API and Foursquare API. All data requests are retrieved in an asynchronous manner using the Fetch API.
  * **Error Handling** Data requests that fail are handled gracefully using .catch() method and showing alerts and printing to console.
* Accessibility
  * **Focus** Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page.
  * **Site elements are defined semantically** Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
* Offline Use
  * **Service Worker** When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## Dependencies
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [react-google-maps](https://github.com/tomchentw/react-google-maps)
* [Recompose](https://github.com/acdlite/recompose)
* [Foursquare API](https://developer.foursquare.com/places-api)
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

## How to uses
Clone project
```
git clone https://github.com/EvgeniiT/spb-map.git
```
Install Dependencies
```
cd spb-map
npm install
```
Start app
```
npm start
```
