[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22796555&assignment_repo_type=AssignmentRepo)
# 320-Final-Project

Project requirements:

- Application is functional and provides an experience to the user
  - Your app runs and a user can interact with it to do something. Very open ended what this will be like. Use your creativity to make something fun!
- Application uses routes
  - App must include at least two routes, ideally one that takes params to call API data, but at minimum loads two or more routes in your Single Page Application. React Router strongly encouraged.
- Fetches external API
  - Whether an api you have created (like a firebase collection, or similar), or a published API, but it must pull data from an external source. **Must use the native fetch api.** No external libraries for data fetching (like axios or react-query). **EXCEPTION**: Can use Firebase SDK if you are using a Firebase App
- Application is deployed
  - Deployed and visible to the public. GitHub Pages, Vercel, Firebase, etc
- Submitted to GitHub properly
  - All work done on a feature branch and merged into the main branch
- Utilizes reusable components
  - As needed components will be flexible and reusable
- Uses prop-types
  - All components that take in props must use prop-types, no generic proptypes, they must be specific. For example, if it takes an array of data, it must be detailed to what that array of data looks like, not just a general array
- README updated
  - README updated to include:
  - the public facing url
  - a brief summary of your project
  - The answers to the following questions Fill out each of these with a few sentences (50 characters minimum):
  - What worked well in this project (what was easy/straightforward)?
  - What didn't work well (what was difficult to understand or parse)?
  - What changes would you make to this project now that it's deployed?
  - What would you improve and/or add to this project now that it's deployed?"
- Incorporates unit testing
  - At least one unit test must be included and working. Components reliant on api calls will not need to be unit tested, but anything that just relies on props will be easy to test. Must document how to run tests
- Utilzes Modern JavaScript
  - Utilizes modern methods of writing JS, no var keyword. Uses arrow functions where appropriate and uses modern methods (for example .map())
- App has styling and is polished
- Incorporate custom CSS to your project. Outside CSS libraries are allowed (Bootstrap, Tailwind, etc), Remove `console.log` statements once you're finished with development. Check for and remove Check for any React errors in the console. Fix linting issues

## Project

- **Name:** PokéBrowse
- **Public URL:** https://cosmih7.github.io/cosminfinalp.github.io/

## Summary

PokéBrowse is a small React single-page app that fetches Pokémon data from the public PokéAPI using the native `fetch` API and displays a list of Pokémon and detail pages for each. The app uses React Router for navigation, reusable components, and PropTypes for typed props.

## How to run locally

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Tests

Run unit tests with:

```bash
npm run test
```

The repo includes a simple unit test for the `Card` component using Vitest and Testing Library.

## Short reflections

- **What worked well:** React Router integration and fetching from the PokéAPI were straightforward; composing small components made development fast and modular.
- **What didn't work well:** Fetching multiple Pokémon details required additional requests which made initial loading slower; batching or server-side caching would help.
- **What changes would you make now that it's deployed:** Add pagination or infinite scroll to reduce initial load and improve UX; add client-side caching for API responses.
- **What would you improve/add:** Add search and filters, better error handling and loading animations.

