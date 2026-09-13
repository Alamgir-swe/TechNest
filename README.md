# 🚀 TechNest

TechNest is a modern React-based web application where users can explore different technologies and add their favorite technologies to a personal stack. The project provides a simple, clean, and beginner-friendly interface.

## 🌐 Live Project

Add your live website link here.

## 💻 Technologies Used

- React
- JavaScript
- Tailwind CSS
- DaisyUI
- Vite
- JSON Data

## ✨ Features

### 1. Explore Technologies
Users can browse different technologies with their name, description, category, rating, and other information.

### 2. Add to Stack
Users can add their favorite technologies to their personal stack by clicking the **Add to Stack** button.

### 3. Dynamic Data Loading
Technology information is loaded dynamically from JSON data using React hooks.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to write and understand.

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

In this project, I used `useState` to manage technology data and the technologies added to the stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform tasks after a component renders.

I used it to load the JSON data when the application starts so that the technology cards can be displayed.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and update the correct item efficiently.

Example:

```jsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
**6.What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content depending on a condition.

For example, when the stack is empty, I show an empty stack message.

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList stack={stack} />
)}
**7 . How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

Example:

<TechnologyCard technology={technology} />

A child component can send information back to the parent by calling a function passed from the parent as a prop.

Parent:

<TechnologyCard
  technology={technology}
  handleAddToStack={handleAddToStack}
/>

Child:

<button onClick={() => handleAddToStack(technology)}>
  Add to Stack
</button>