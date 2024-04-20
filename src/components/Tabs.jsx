import { array, number } from "prop-types";
import { useState } from "react";
import Button from "./Button";

export const Tabs = ({ tabs, indexActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(indexActive);

  return (
    <section className="tabs-container">
      <div className="tabs-buttons-container">
        {tabs &&
          tabs.map((article, index) => {
            return (
              <div key={index}>
                <Button
                  variant={activeIndex === article.id ? "primary" : "light"}
                  onClick={() => setActiveIndex(article.id)}
                  key={article.key}
                >
                  {article.title}
                </Button>
              </div>
            );
          })}
      </div>
      {tabs.find((tab) => tab.id === activeIndex).content}
    </section>
  );
};

export default Tabs;

Tabs.propTypes = {
  key: number,
  indexActive: number,
  tabs: array.isRequired,
};
