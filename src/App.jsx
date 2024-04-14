import { useState } from "react";
import Article from "./components/Article";
import Button from "./components/Button";

const App = () => {
  const [isArticleDisplayed, setIsArticleDisplayed] = useState(false);

  const handleToggleArticle = () => {
    setIsArticleDisplayed(!isArticleDisplayed);
  };

  return (
    <>
      <h1>Mini Blog</h1>
      <Button
        variant={isArticleDisplayed ? "danger" : "primary"}
        onClick={handleToggleArticle}
      >
        {isArticleDisplayed ? "Hide" : "Show"} article
      </Button>
      {isArticleDisplayed && (
        <Article title="My Article">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            molestiae obcaecati, velit perferendis libero dolore inventore
            dolorum vero, voluptatum totam officiis a? Doloribus blanditiis
            rerum consectetur neque autem? Sunt, quo.
          </p>
        </Article>
      )}
    </>
  );
};

export default App;
