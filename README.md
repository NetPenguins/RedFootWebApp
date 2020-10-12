# RedFoot-WebApp
> ### Web application for reporting wild animals that are percieved as a threat. The idea came from a need for communal knowledge around local wildlife.


> ### [Live Demo](https://redfoot.netlify.app) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c4a32418-0f77-4622-b7d9-ecc0837a54ab/deploy-status)](https://app.netlify.com/sites/redfoot/deploys) 

## Run Locally
---
## Authentication
In order for the map to allow users to make annotations they must be authenticated. This is done through *[Firebase](https://firebase.google.com)* and will require an API key to be placed in your `.env.development` file. You will also need a *[MapBox](https://account.mapbox.com/access-tokens/)* access token. 

Example as follows:
```js
GATSBY_APP_ID="API_ID"
GATSBY_AUTH_DOMAIN="<Firebase auth domain>"
GATSBY_DB_URL="<Firebase Realtime database URL>"
GATSBY_FB_API="<Firebase API Key>"
GATSBY_MSG_ID="<Firebase Message ID>"
GATSBY_PROJ_ID="<Firebase Project ID>"
GATSBY_STRG_BUCKET="<Firebase Storage Bucket>"
GATSBY_MAP_API="<MAPBOX ACCESS TOKEN>"
```

Once you have setup your configuration for Authentication, Database and MapBox you can run `npm start` from the project's root directory. 

## Next Steps
---
-[ ] Containerize the app to a docker image that will leverage and support local database solutions as well as off premise solutions. 

-[ ] Adopt Material-UI component structure for map side bar. 