import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const MenuLink = () => {
  return (
    <div>
      <a
        href="#navbar"
        className="link font-normal text-pink-500 w-1/2 px-4 py-3 m-6 duration-200 rounded-md hover:scale-105 bg-neutral-300"
      >
        <FontAwesomeIcon icon={faAnglesUp} size="sm" /> Back
      </a>
    </div>
  );
};

export default MenuLink;
