import { useState } from "react";

const App = () => {
  // Write the code of your component here

  const [showArticle, setShowArticle] = useState(false);

  function handleArticle() {
    setShowArticle(!showArticle);
  }
  return (
    <>
      <h1>Mini Blog</h1>
      {showArticle ? (
        <button onClick={() => handleArticle()} className="btn btn--danger">
          Hide article
        </button>
      ) : (
        <button onClick={() => handleArticle()} className="btn btn--primary">
          Show article
        </button>
      )}

      {showArticle && (
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
