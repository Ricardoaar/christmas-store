import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Start project from react </h1>
        <button onClick={() => console.log("You're clicking me")}>
          This is a component in react, click it!
        </button>
      </div>
    </>
  );
};

export default HomePage;