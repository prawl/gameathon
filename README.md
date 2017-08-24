# Overview
This is a site for the SB 24-Hour Gameathon

# Setup
- Install yarn. See instructions [here](https://yarnpkg.com/en/docs/install).
- Run `yarn` to install dependencies. 

# Development
`npm run dev`

# Build for Deployment
`npm run build`

# Deployment
* Build the app. This will update everything in the `dist` folder. `npm run build`
* Commit all of your changes, INCLUDING the `dist` folder. 
* Run: `git subtree push --prefix dist origin gh-pages`