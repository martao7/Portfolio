import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const MenuLink = () => {
  return (
    <div>
      <a href="src/components/Navbar.jsx" className="link">
        <FontAwesomeIcon icon={faAnglesUp} size="sm" /> Back to Homepage
      </a>
    </div>
  );
};

export default MenuLink;
