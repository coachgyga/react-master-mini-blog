import { useState } from "react";
import Article from "./components/Article";
import Button from "./components/Button";
import Tabs from "./components/Tabs";
import useTimer from "./hooks/UseTimer";

const tabs = [
  {
    id: 1,
    title: "Atomic React",
    content: (
      <Article title="Atomic React">
        <p>
          Atomic React dolor sit amet consectetur adipisicing elit. Praesentium
          molestiae obcaecati, velit perferendis libero dolore inventore dolorum
          vero, voluptatum totam officiis a? Doloribus blanditiis rerum
          consectetur neque autem? Sunt, quo.
        </p>
      </Article>
    ),
  },
  {
    id: 2,
    title: "Components",
    content: (
      <Article title="Components">
        <p>
          Components dolor sit amet consectetur adipisicing elit. Praesentium
          molestiae obcaecati, velit perferendis libero dolore inventore dolorum
          vero, voluptatum totam officiis a? Doloribus blanditiis rerum
          consectetur neque autem? Sunt, quo.
        </p>
      </Article>
    ),
  },
  {
    id: 3,
    title: "Hooks",
    content: (
      <Article title="Hooks">
        <p>
          Hooks dolor sit amet consectetur adipisicing elit. Praesentium
          molestiae obcaecati, velit perferendis libero dolore inventore dolorum
          vero, voluptatum totam officiis a? Doloribus blanditiis rerum
          consectetur neque autem? Sunt, quo.
        </p>
      </Article>
    ),
  },
];

const App = () => {
  const [areArticlesDisplayed, setAreArticlesDisplayed] = useState(false);

  const handleToggleArticles = () => {
    setAreArticlesDisplayed(!areArticlesDisplayed);
  };

  return (
    <>
      <h1>Mini Blog</h1>
      <p style={{ fontWeight: "bold", fontSize: 20 }}>
        You spent {useTimer(10)} on the blog.
      </p>
      <Button
        variant={areArticlesDisplayed ? "danger" : "primary"}
        type="button"
        onClick={handleToggleArticles}
      >
        {areArticlesDisplayed ? "Hide" : "Show"} articles
      </Button>
      {areArticlesDisplayed && <Tabs defaultActiveTabId={2} tabs={tabs} />}
    </>
  );
};

export default App;
