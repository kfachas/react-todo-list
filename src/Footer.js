const Footer = ({ values, setValues }) => {
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
      >
        {values.lightmode === false ? "WANT LIGHTMODE ?" : "WANT DARKMODE ?"}
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
