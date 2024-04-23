import { arrayOf, node, number, shape, string } from "prop-types";
import { Fragment, useState } from "react";
import Button from "./Button";

const Tabs = ({ defaultActiveTabId, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId); // État dérivé (derived state)

  const handleChangeTab = (tabId) => () => {
    setActiveTabId(tabId);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-buttons-container">
        {tabs.map(({ title, id }) => (
          <Button
            key={id}
            variant={id === activeTabId ? "primary" : "light"}
            onClick={handleChangeTab(id)}
          >
            {title}
          </Button>
        ))}
      </div>
      {tabs.map(({ id, content }) =>
        id === activeTabId ? (
          <Fragment key={id}>{content || "No content."}</Fragment>
        ) : null
      )}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  defaultActiveTabId: number,
  tabs: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      content: node.isRequired,
    })
  ).isRequired,
};

Tabs.defaultProps = {
  defaultActiveTabId: 1,
};
