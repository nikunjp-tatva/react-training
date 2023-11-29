# Introduction
####  What is React ?
* React is an open-source front-end Javascript library that is used to create interactive web elements in web development. It is often used for building single-page applications.

#### React History
* In 2011 React was initially developed by Jordan Walke, a software engineer at Facebook. It was first deployed on Facebook's News feed. In 2013 React was officially released for all developers and make it open source. Current React version - 18.2.0

#### React Features
- `Component-Based Architecture`: Uses reusable component-based.
- `Virtual DOM`: This process of updating the DOM through the virtual DOM is known as "reconciliation.". Compare copy of Virtual DOM with old DOM and according to that create DOM.

- `JSX (JavaScript XML)`: Using JSX can directly write HTML-like code in Javascript. It simplifies the creation of React elements and makes code more readable.

- `Unidirectional Data Flow`: React maintains a unidirectional data flow, where data flows in a single direction from parent components to child components. This helps in managing the application state and simplifies debugging by ensuring that changes are predictable and traceable.

- `Lifecycle Methods`: React components have lifecycle methods that allow developers to control what happens at certain points in a component's life, such as when it is created, updated, or destroyed. This enables handling side effects, data fetching, and cleanup operations.

- `State Management`: React allows components to have their own internal state, which can be modified and updated. The `useState` hook (in functional components) and `setState` (in class components) are used to manage state within components.

- `React Router`: is a popular routing library. It enables navigation and handling of different views or pages in a single-page application (SPA) without the need for a full page reload.

- `Context API`: The Context API in React provides a way to pass data in global context so every component can use it without passing in props.

#### React Advantages
- `Reusable Components`: React's component-based structure allows for building reusable UI elements.

- `Fast rendering`: React's use of a virtual DOM helps optimize performance by updating only the parts of the actual DOM that have changed. This results in faster rendering and a more responsive user interface.

- `Developer Tools`: React comes with a set of powerful developer tools (React DevTools) that allow developers to inspect component hierarchies and using that can debug easily.

- `Easy to Learn and Use`: React is much easier to learn and use. It comes with a good supply of documentation, tutorials, and training resources.

- `Strong community support`:  React  has very strong community support, which is one of the main reasons to adopt React JS in your project and facebook also maintaining React.

- `Testing`: React provides an inbuilt testing library for testing the React components and also various testing libraries/frameworks are available in the market that support react and react structure including API calls.

- `Having lots of JavaScript Library`: It is offering a very rich JavaScript library. The JavaScript library provides more flexibility to the web developers to choose the way they want.

#### React Disadvantages
- `The high pace of development`: React is a fast-moving, fast-changing library.the environment continually changes so fast, some of the developers not feeling comfortable to relearn the new ways of doing things regularly. It may be hard for them to adopt all these changes with all the continuous updates. They need to be always updated with their skills and learn new ways of doing things.

- `Poor Documentation`: React technologies updating and accelerating so fast that there is no time to make proper documentation. To overcome this, developers write instructions on their own with the evolving of new releases and tools in their current projects.

- `JSX as a barrier`: ReactJS uses JSX. It's a syntax extension that allows HTML with JavaScript mixed together. This approach has its own benefits, but some members of the development community consider JSX as a barrier, especially for new developers.

- `Does Not Support SEO`: React, by design, was not built with SEO in mind. Therefore, Google does not automatically index apps created with the library. You must have some expertise in SEO to configure your app properly. This takes away from other development time.

- `View mixed with logic by default`: ​In React, we don't have separated component logic and view by default (like it is in Angular). Instead, our component contains a function \render\\ which returns JSX . we can meet components where we can see hundreds of mixed lines of logic code and jsx code.

- `Lack of Built-in Features`: React does not come with built-in features such as routing, HTTP requests, and state management. Developers have to rely on third-party libraries or build these features themselves, which can increase development time.