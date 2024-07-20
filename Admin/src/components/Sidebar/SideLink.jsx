import { Link, useLocation } from "react-router-dom";

const SideLink = ({ sidebarData }) => {
  const location = useLocation();

  return (
    <>
      {sidebarData.map((data) => (
        <li
          key={data.id}
          className={`p-4 hover:bg-black hover:text-white transition-colors duration-500 ${
            location.pathname === data.link
              ? "text-white bg-black"
              : "text-black"
          }`}
        >
          <Link to={data.link}>{data.name}</Link>
        </li>
      ))}
    </>
  );
};

export default SideLink;
