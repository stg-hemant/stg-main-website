import { Link, useLocation } from "react-router-dom";

const CustomTab = ({ title, link, isActive }) => {
  const location = useLocation();

  return (
    <Link to={link}>
      <li
        className={`cursor-pointer py-2 px-4 hover:bg-black hover:text-white transition-colors duration-500 ${
          location.pathname === link ? "text-white bg-black" : "text-black"
        }`}
      >
        {title}
      </li>
    </Link>
  );
};

export default CustomTab;
