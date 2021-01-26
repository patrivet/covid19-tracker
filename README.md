# covid19 Global Tracker

### [Live app link](https://covid19-tracker-pr.netlify.app/)


Current hosted status (Netlify): [![Netlify Status](https://api.netlify.com/api/v1/badges/7db5857e-3244-44da-b0f5-478192d1ccd4/deploy-status)](https://app.netlify.com/sites/covid19-tracker-pr/deploys)

======



# Asset CPU and Memory Dashboard	
Single page application showing a live feed of CPU and memory usage on devices and their running programs.  
Design based on a [Kubernetes resources dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/).

## Features
- Any device can be selected from the left hand side, after which the device's CPU, memory and programs are then shown.
- The CPU and memory usage updates each minute and the programs table can be sorted on each column.
- Pressing the hamburger in the top left hand corner show/hides the device list panel.

## Hosting
See the live app hosted [here](https://covid19-tracker-pr.netlify.app/)

Current hosting status: 
[![Netlify Status](https://api.netlify.com/api/v1/badges/7db5857e-3244-44da-b0f5-478192d1ccd4/deploy-status)](https://app.netlify.com/sites/covid19-tracker-pr/deploys)

## Screenshot(s):
![Screenshot one](/assets/screenshots/Screenshot_1.png)

## How to run:

 1. Clone this repo ```git clone https://github.com/patrivet/covid19-tracker.git```
 ```sh
$ git clone https://github.com/patrivet/covid19-tracker.git
```
 
 2. Change to the covid19-tracker client directory e.g. ```cd covid19-tracker/client```
 3. Install ```npm install```
 4. Inside the /client/src/ directory, create an '.env' environment file and populate with the following content:-


    REACT_APP_COVID_DAILY_DATA_API=https://disease.sh/v3/covid-19/countries/<COUNTRY_CODE>?yesterday=<YESTERDAY>&twoDaysAgo=false&strict=true&allowNull=false
    REACT_APP_COVID_GLOBAL_TOTALS_API=https://disease.sh/v3/covid-19/all?yesterday=<YESTERDAY>&twoDaysAgo=false&allowNull=false
    REACT_APP_COVID_HISTORICAL_DATA_API=https://disease.sh/v3/covid-19/historical/<COUNTRY_CODE>?lastdays=all




 
 5. Run app ```npm start```
 
## Built using:
- [React v17.0.1](https://reactjs.org/)
- [React-Context](https://reactjs.org/docs/context.html)
- [Material-UI](https://material-ui.com/)
- [Apex Charts](https://apexcharts.com/)

## Created by: 
Pat Rivet: [Github](https://github.com/patrivet/) | [Linkedin](https://www.linkedin.com/in/pat-rivet/)
