const Footer = ({ values, setValues, lightmode }) => {
  return (
    <footer>
      <button
        onClick={() => {
          const newTab = { ...values };
          if (newTab.lightmode === false) {
            newTab.lightmode = true;
          } else {
            newTab.lightmode = false;
          }
          setValues(newTab);
        }}
        style={{
          justifyContent: lightmode === true ? "flex-start" : "flex-end",
        }}
      >
        <div className={lightmode === true ? "circleblue" : "circlered"}></div>
      </button>
      <span>
        Made at{" "}
        <a href="https://lereacteur.io" target="_blank" rel="noreferrer">
          Le Reacteur
        </a>{" "}
        by{" "}
        <a href="https://github.com/kfachas" target="_blank" rel="noreferrer">
          Kevin Fachas
        </a>{" "}
        - 2021
      </span>
    </footer>
  );
};

export default Footer;
