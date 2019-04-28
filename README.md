# Frontend Starter for Gridsome & Firebase using VueFire

Optionally use with the Backend Firebase starter that includes user roles, useful functions and rules.

## What is inside

1. Ready to go firebase setup
2. Login and logout using Firebase authentication
3. Stores to keep everything in sync
4. Code examples to get you running
5. No style framework so you are free to choose

### [Gridsome](https://gridsome.org/docs)

Static site builder, but does not limit to how dynamic it can be client side

### [Firebase](https://firebase.google.com/docs)

**Cloud Firestore** – Realtime nosql datastore

**Firebase Authentication with FirebaseUI** – Supports social and email login

**Cloud Functions** – Execute custom written functions


### Other

  **Simple Store** – Checkout how your clicks are being counted from the layout to where it is displayed

  **SCSS** – Locate and add more mixins in the `assets/sass` directory, all files are automatically globally available

  **[FlexGrid](http://flexboxgrid.com/)** – For all your basic layout needs

  **firesync.js** – Checkout Firesync.js to see the examples

### Components

  **Auth Set** – Set of login and logout components

  **Loading** – A simple loading component that you can use anywhere


# Getting Started

If you don't have gridsome installed run `npm install --global @gridsome/cli`

## Frontend

1. Clone the repo
2. Run `npm install`
3. Copy the `.env.example` file and rename to `.env.development`
4. Update the `.env.development` with your firebase credentials
5. `gridsome develop` to start a local dev server at `http://localhost:8080`
6. Happy coding 🎉🙌

## Firebase

1. Run `npm install -g firebase-tools` [Firebase cli](https://firebase.google.com/docs/cli)
2. Create your project folder `mkdir my-project`
3. Navigate to your project folder `cd my-project`
4. Run `firebase login`
5. Run `firebase init`

## Deploying your site

1. Build your static site `gridsome build``
2. Move the dist folder into your project directory as public `mv dist ../public`
3. To preview your static site run `firebase serve --only hosting`
4. Deploy the site to [Firebase hosting](https://firebase.google.com/docs/hosting/) run `firebase deploy --only hosting`

Tip: You can move your frontend project into your project folder for easier development ex. `my-project/website/` and then deploy with a single command within your website folder: `npm run deploy`