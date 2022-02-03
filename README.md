# CrUX Explorer (WIP)

Know the speed of your pages and make them better! Powered by the [Chrome User Experience Report](https://web.dev/chrome-ux-report/), CrUX Explorer provides you with data from real Chrome users all around the world to know how a page or a site is performing in terms of:

- Loading, thanks to the LCP metric
- Interactivity, with FID data
- Visual Stability, owing to CLS values

[CWV](https://web.dev/vitals/#core-web-vitals) are part of Google's Page Experience ranking signals, so improving them you are working on inproving your SEO results.

Check how your page is performing in CWV and compare your results to your main competitors. You can also save your CWV results and check them whenever you need them in the History section. Check how your metrics evolve over time!

## Disclaimer
This project stores secret data (database configuration and API keys) in the React App. I know it's a terrible idea and it will be visible through developer tools. This data should be stored in backend. 

## Screenshots
### Home
![Home page](/public/screenshots/home.jpg)
### Signup
![Signup](/public/screenshots/signup.jpg)
### New Check
![New Check](/public/screenshots/new-check.jpg)
### Test Result
![Test Result](/public/screenshots/test-result.jpg)
### History
![History](/public/screenshots/history.jpg)

## Installation
If you want to create your own CrUX Explore, follow these instructions. 

1. Clone the repository and install dependencies: 
<pre><code>
$ git clone git@github.com:guaca/crux-checker.git
$ cd crux-checker
$ npm install
</code></pre>

2. Create a Firebase Project and set your credentials in firebaseConfig.js file ([documentation](https://firebase.google.com/docs/web/setup))

3. Get your own Crome User Experience Report APIkey and set it in NewCheck.jsx file ([documentation](https://developers.google.com/web/tools/chrome-user-experience-report/api/guides/getting-started))

## Features and Technologies of the project
- [React](https://reactjs.org/) and [React Hooks](https://reactjs.org/docs/hooks-intro.html) for building the entire UI and handle the app state.
- [React Router](https://reactrouter.com/docs/en/v6), to handle URLs.
- [Firebase Authentication](https://firebase.google.com/docs/auth/web/start), to allow users to sign in and use the tool.
- [Axios](https://axios-http.com/docs/intro), to fetch data from de [Chrome User Experience API](https://web.dev/chrome-ux-report-api/).
- [Recharts](https://recharts.org/en-US/), for data visualization.
- [React Helmet](https://www.npmjs.com/package/react-helmet), to handle SEO tags.

## Pending iterations
- Create an input component to ask users for their own CrUX APIkey and store it in localStorage.
- Store saved tests into Firebase Realtime Database instead of localStorage.
- Add Jest unit testing.

## Demo
. https://crux-explorer.netlify.app
