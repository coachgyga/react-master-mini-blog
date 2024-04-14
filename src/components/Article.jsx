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
