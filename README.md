![](/assets/imgs/virus_logo.png)
# Covid-19 Global Tracker
Single page application showing latest covid-19 statistics at global level and broken across 210 countries.
The source of the data comes from [disease.sh API](https://disease.sh/), which in turn sources from John Hopkins University, Worldometers and others.

## Features
- Positive test cases and deaths shown for current day, previous day, trend from current to previous day and totals at the global level and for each country.
- Countries can be bookmarked, and the display changed to show bookmarked countries, or all countries.
- Countries can be sorted by various metrics, such as daily cases descending/ascending.
- Clicking on a country will show further statistics and detailed data in a serious of interative charts.

## Hosting
See the live app hosted [here](https://covid19-tracker-pr.netlify.app/)

Current hosting status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/7db5857e-3244-44da-b0f5-478192d1ccd4/deploy-status)](https://app.netlify.com/sites/covid19-tracker-pr/deploys)

## Screenshots:

![Global view:](/assets/screenshots/GlobalView.png)

![Sorting options](/assets/screenshots/Sorting_Options.png)
![display options](/assets/screenshots/Display_Options.png)

Country view:
![Country view:](/assets/screenshots/Country_View1.png)
![Country view 2:](/assets/screenshots/Country_View2.png)

## How to run:

 1. Clone this repo ```git clone https://github.com/patrivet/covid19-tracker.git```
 2. Change to the covid19-tracker client directory e.g. ```cd covid19-tracker/client```
 3. Install ```npm install```
 4. Inside the /client/src/ directory, create an '.env' environment file and populate with the following content:-
```
REACT_APP_COVID_DAILY_DATA_API=https://disease.sh/v3/covid-19/countries/<COUNTRY_CODE>?yesterday=<YESTERDAY>&twoDaysAgo=false&strict=true&allowNull=false
REACT_APP_COVID_GLOBAL_TOTALS_API=https://disease.sh/v3/covid-19/all?yesterday=<YESTERDAY>&twoDaysAgo=false&allowNull=false
REACT_APP_COVID_HISTORICAL_DATA_API=https://disease.sh/v3/covid-19/historical/<COUNTRY_CODE>?lastdays=all
```
 5. Run app ```npm start```
 
## Built using:
- [React v17.0.1](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Disease.sh API](https://disease.sh/docs/)
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
- [React JSX Highcharts](https://www.npmjs.com/package/react-jsx-highcharts)
- [React Router](https://reactrouter.com/)
- [FontAwesome for icons](https://fontawesome.com/)

## Created by: 
Pat Rivet: [Github](https://github.com/patrivet/) | [Linkedin](https://www.linkedin.com/in/pat-rivet/)

## License
Licensed under the GNU (General Public) License.
