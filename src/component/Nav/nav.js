import "./Style/nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="container-nav1">
        <div class="background-one link-container">
          <p
            class="link-one"
            style={{
              padding: "10%",
              height: "10%",
              cursor: "pointer",
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            Acceuil
          </p>
        </div>
      </div>
      <div className="container-nav2">
        <div class="background-one link-container">
          <a
            href="mailto:enzo.makked@gmail.com"
            class="link-one"
            style={{
              textDecoration: "none",
              padding: "10%",
              height: "10%",
              cursor: "pointer",
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
