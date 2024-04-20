import PropTypes from "prop-types";

const Article = ({ title, children }) => {
  // Write the code of your component here
  return (
    <div key="">
      <h2>Mon titre : {title}</h2>
      {children}
    </div>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
