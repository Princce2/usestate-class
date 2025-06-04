import { useState } from "react";
// ✅ What does useState help you do in React?
// useState helps you store and manage changing data (called state) in a React function component.

// 🧠 Think of it like this:
// When you want your app to remember something and react when that thing changes — like:

// A counter number going up or down

// A button being clicked

// A form input being typed into

// A light switch toggling on/off

// A list of items being added or removed

// You use useState to hold that value and update it when needed.

// 🔁 Without useState, your app wouldn’t "remember" anything. It would always reload from scratch every time it renders.
// 🎯 So in short:
// useState lets your component remember information and update the UI when that information changes.
// Term	Meaning
// useState()	Initializes and manages component state
// state	Current value of the state
// setState()	Function to update the state
// Initial Value	Value you pass to useState() initially
const Back = () => {
  const [count, setCount] = useState(0);

  // Step 2: Functions to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  <div className="flex flex-col items-center justify-center  bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Counter: {count}</h1>
    <div className="flex gap-4">
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Increase
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Decrease
      </button>
    </div>
  </div>;

  
  return (
    <>
      <div className="flex flex-col items-center justify-center  bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Counter: {count}</h1>
        <div className="flex gap-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Increase
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Decrease
          </button>
        </div>
      </div>
      ;
    </>
  );
};
export default Back;
