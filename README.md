# Frontend Starter for Gridsome & Firebase

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

  **Firesync** – Keep Firestore subscriptions in sync with store. Checkout `firesync.js` to see the examples

  **Simple Store** – Checkout how your clicks are being counted from the layout to where it is displayed

  **SCSS** – Locate and add more mixins in the `assets/sass` directory, all files are automatically globally available

  **[FlexGrid](http://flexboxgrid.com/)** – For all your basic layout needs


### Components

  **Auth Set** – Set of login and logout components

  **Loading** – A simple loading component that you can use anywhere


# Getting Started

If you don't have gridsome installed run `npm install --global @gridsome/cli`

## Frontend

1. Clone the repo or run `gridsome create website https://github.com/u12206050/gridsome-firebase-starter.git` to create the site in a folder called `website`
2. Copy the `.env.example` file and rename to `.env.development`
3. Update the `.env.development` with your firebase credentials
4. `gridsome develop` to start a local dev server at `http://localhost:8080`
5. Happy coding 🎉🙌

## Firebase

1. Run `npm install -g firebase-tools` [Firebase cli](https://firebase.google.com/docs/cli)
2. Create your project folder `mkdir my-project`
3. Navigate to your project folder `cd my-project`
4. Run `firebase login`
5. Run `firebase init`

## Deploying your site

Update your enviroment variables in a file called `.env.production`

1. Build your static site `gridsome build``
2. Move the dist folder into your project directory as public `mv dist ../public`
3. To preview your static site run `firebase serve --only hosting`
4. Deploy the site to [Firebase hosting](https://firebase.google.com/docs/hosting/) run `firebase deploy --only hosting`

Tip: You can move your frontend project into your project folder for easier development ex. `my-project/website/` and then deploy with a single command within your website folder: `npm run deploy`

## Functions

On every Vue component/view you have access to the following:

  **`this.$db`**: Used for creating references and fetching data from Firestore. Same as `firebase.firestore()`

    Example: `this.$db.collection('documents').get().then(snapshot => console.log(snapshot.size))`

  **`this.$bind`**: Bind the results of a firestore reference to a property on the component

    Example: `this.$bind(this.$db.collection('documents'), 'documents')`: Now on `this.documents` you can access the documents and have the automatically be updated.

  **`this.$unbind`**: Unbinds the property so it no longer gets updates.

    Example: `this.$unbind('documents', null?): The 2nd argument is optional. To leave the property untouched in its current state leave out the `null`

  **`this.$functions`**: Most commonly used for creating requests to Firebase functions. Same s `firebase.functions()`

    Example: `this.$functions.httpsCallable('getTime')().then(time => console.log(time))`

  **`this.$auth**`**: This is extended on the `firebase.auth()` object which besides the `logout()` and `currentUser` methods and function it also has:

    `this.$auth.isLoggedIn`: If the user is logged in or not

    `this.$auth.userId`: The user id of the currently logged in user

    `this.$auth.roles`: An object of roles the user has been assigned

  **`this.$firestore`**: Contains the useful field properties to use when writing to db.

    `this.$firestore.GeoPoint`

    `this.$firestore.Timestamp`

    `this.$firestore.FieldValue`

## Other

  `npm run build`: Will build your project and test your **bundle size** according to the size limits set in `package.json`