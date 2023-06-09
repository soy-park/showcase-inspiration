# Medicine for the Mind

## Abstract
This application is tailored to healthcare workers who want some encouragement regarding aging. The webpage allows them to view a list of cards, each containing an encouraging quote and author, and favorite them. They can see a collection of their favorited cards on a different page called Favorites. 

## Technologies Used
- JavaScript
- React 
- Router
- Cypress
- HTML
- CSS

## Deployed link 
https://showcase-medicine-for-the-mind.vercel.app/

## Installation Instructions
1. Copy SSH key on GitHub inside the code dropdown
2. Using the terminal, run `git clone [SSH key]`
3. Run command `cd showcase-medicine-for-the-mind` to move into project directory
4. Run command open `npm start` to launch the application in the web browser
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Preview of App
![Image](Healthcare-heroes.png)
![Image](Healthcare-heroes-favorites.png)

## Context
The curriculum at Turing School of Software and Design contains four modules with each module being six weeks in length. "Medicine for the Mind" was completed during the fifth week of Module 3 at Turing School of Software and Design. The time to complete this project was approximately 20-25 hours. 

## Contributors
Soyeon Park [@soy-park](https://github.com/soy-park)

## Learning Goals
- Demonstrate mastery of React, Router, asynchronous JavaScript, and end-to-end testing with Cypress
    - Create multiple views using Router
    - Display data from an API
    - Add functionality such as favoriting or adding to a list, searching, commenting, etc.
- Create personas and user stories to describe a target audience
- Work within constraints to deliver a product for a niche audience, which helps solve a problem unique to them

## Wins + Challenges

#### Wins: 
- Successfully fetching data from a public API using network requests
- Using components with React and passing in props
- Creating organized, modular files for each component 
- Figuring out that links in the application weren't working because BrowserRouter didn't wrap `<React.StrictMode>` and `<App />` 
- Intercepting data and using Cypress assertions in tests
- Designing the page layout with primary colors to make it consistent with a youthful, encouraging vibe 

#### Challenges: 
- Having all aspects of the application be tailored to a specific niche audience 
- Deciding whether or not to use Switch in React Router
- Creating sad paths for Cypress tests (because they seemed redundant)