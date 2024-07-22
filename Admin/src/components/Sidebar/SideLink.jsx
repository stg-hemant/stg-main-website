import { Link, useLocation } from "react-router-dom";

const SideLink = ({ sidebarData }) => {
  const location = useLocation();

  return (
    <>
      {sidebarData.map((data) => (
        <Link to={data.link} key={data.id}>
          <li
            className={`p-4 hover:bg-black hover:text-white transition-colors duration-500 ${
              location.pathname === data.link
                ? "text-white bg-black"
                : "text-black"
            }`}
          >
            {data.name}
          </li>
        </Link>
      ))}
    </>
  );
};

export default SideLink;
