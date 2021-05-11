# Booking

A simple booking

## How to use:

You must rename `.env.sample` to `.env` then set **base url** in the file\
_* The .env file is existed in the version for run easily ;-)_ 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test:unit`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `yarn test:e2e`

Launches the end 2 end test.\
See the section about [running tests](https://docs.cypress.io/) for more information.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## TODO Front-end:

- [x] Structure of project by react
- [x] Manage routes
- [x] UI by material-ui
- [x] Home page
- [x] Booking page
- [ ] Login page
- [ ] State manager by Redux
- [ ] Redux middleware by Redux Thunk
- [ ] Document by Storybook
- [ ] Unit test by Jest
- [ ] E2E test by Cypress


## TODO Back-end:
Aad a post method for add new time slot to allocated list:
**POST** _https://private-37dacc-cfcalendar.apiary-mock.com/mentors/1/agenda_
- Method: `POST`
- URL: `{BASE_URL}/mentors/{MENTOR_ID}/agenda`
- Data: `{start: newSlotTime, reason: newSlotReason}`
- Response code: `201`

## References:

- https://reactjs.org/
- https://material-ui.com/
- http://jquense.github.io/react-big-calendar/examples/index.html
- https://www.cypress.io/