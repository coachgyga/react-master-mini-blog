import { useState } from "react";

const App = () => {
  // Write the code of your component here

  const [articleDisplayed, setArticleDisplayed] = useState(false);

  function handleToggleArticle() {
    setArticleDisplayed(!articleDisplayed);
  }
  return (
    <>
      <h1>Mini Blog</h1>
      <button
        onClick={() => handleToggleArticle()}
        className={`btn ${articleDisplayed ? "btn--danger" : "btn--primary"}`}
      >
        {articleDisplayed ? "Hide" : "Show"} article
      </button>

      {articleDisplayed && (
        <div className="container">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            dolor est molestiae nihil animi praesentium sapiente quidem vel
            facilis labore, eligendi accusamus a itaque earum consequatur
            voluptate, facere pariatur qui.
          </p>
        </div>
      )}
    </>
  );
};

export default App;
