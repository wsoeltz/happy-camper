# Happy Camper

> App for posting campgrounds and reserving campsites. Created with Django and React.

## Running the app

Running the django API requires the following additional packages:

```
djangorestframework
djangorestframework-jwt
django-cors-headers
```

To run the API, `cd` into the `happy_camper_1 ` directory and run the following commands:

```
python manage.py makemigrations campgrounds
python manage.py migrate
python manage.py runserver
```

Then in a separate terminal window, `cd` into the `happy_camper_1/client` directory and run the following commands:

```
npm i
npm start
```

This should install all of the dependencies and then start the front-end of the app. If the back-end is using a port other than `localhost:8000`, the file at `happy_camper_1/client/.env` will need to be updated with correct API base url and the front-end server will need to be restarted.

## Features of the App

**Happy Camper** is a single-page application running with React and using a Django API to request and modify data. The user can perform the following actions:

- Register for an account
- Log in to an existing account
- Change the date they are looking to go camping
- Find a Campground through a Map based interface
- Select a Campground and read details about it, including which Campsites are available for the selected date

If the user is logged in, they can
- Book any available site for any day not in the past
- View all of their own reservations, cancel any of them, or click on them to see details about the campground
- Post a new campground that they own
- Edit a campground that they own
- Add and remove campsites for a campground that they own
- View and cancel reservations for a campground that they own


## Overview of the files in the app

### Back-end

- `campgrounds/models.py` Contains all of the models for the app
- `campgrounds/views.py` Contains all of the views for the app
- `campgrounds/urls.py` Contains all of the API urls for the app
- `campgrounds/serializers.py` Sets up part of the JSON Web token authorization flow needed to allow authorization in the separate React app. [Taken from this article](https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a).
- `client_dist/` Django app whose only purpose is to serve the static files built from the production version of React for use in running the production version of Happy Camper

### Front-end

- `client/src/App.js` Entry point for the front-end. Sets up routing, context, global variables and functions
- `client/src/hooks/useData.js` Reusable hook for API GET requests and refetching data
- `client/src/components/AddCampground.js` Page component for *Add Campground* (`/add-campground`) page
- `client/src/components/AddCampsite.js` Form component for adding a campsite to a campground
- `client/src/components/CampgroundDetail.js` Page component for *Campground Detail* (`/campground/:id`) page
- `client/src/components/CampgroundForm.js` Form component for adding and editing campgrounds
- `client/src/components/EditCampground.js` Page component for `Edit Campground` (`/edit-campground/:id`) page
- `client/src/components/LoginRegisterForm.js` Form component for logging in (`/login`) and registering (`/register`)
- `client/src/components/Map.js` Component for displaying the map
- `client/src/components/Nav.js` Component for the top level navigation and date picker
- `client/src/components/StandardPanel.js` Basic component for wrapping "pages" in a standard, close-able overlay over the map
- `client/src/components/Utils.js` Utility functions used across a number of components
- `client/src/components/YourCampground.js` Page component for *Your Campgrounds* (`/your-campgrounds`) page
- `client/src/components/YourReservations.js` Page component for *Your Reservations* (`/reservations`) page
- `client/postbuild.js` Node script that runs after `npm run build` that copies all static files into `client_dist/` and modifies the output of `index.html` to work as a proper Django template
