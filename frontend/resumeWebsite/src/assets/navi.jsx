import { useEffect, useState } from "react";
import naviStyles from "../styles/naviStyles.module.css";

const sections = ["home", "about", "projects", "contact"];

function Navi() {
  const [active, setActive] = useState("home");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;
      let minOffset = window.innerHeight;

      sections.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        if (!element) return;
        const rect = element.getBoundingClientRect();

        if (rect.top >= 0 && rect.top < minOffset) {
          minOffset = rect.top;

          currentSection = id;
        }
      });

      if (currentSection && currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const scrollTo = (id) => {
    const element = document.querySelector(`#${id}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={naviStyles.navBar}>
      <div className={naviStyles.websiteName}>Brennan Turi</div>
      <div className={naviStyles.spreadNavi}>
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`${naviStyles.navButton} ${
              active === id ? naviStyles.active : ""
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
            <div className={naviStyles.naviUnderline}></div>
          </button>
        ))}
      </div>
      <div className={naviStyles.navBarCondensed}>
        <img
          className={naviStyles.naviIcon}
          src="/menu.svg"
          alt="menu"
          onClick={toggleMenu}
        />

        {menuOpen && (
          <div className={naviStyles.dropdownMenu}>
            {sections.map((id) => (
              <div
                key={id}
                onClick={() => {
                  scrollTo(id);
                  closeMenu();
                }}
                className={`${naviStyles.navButton} ${
                  active === id ? naviStyles.active : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <div className={naviStyles.naviUnderline}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navi;
