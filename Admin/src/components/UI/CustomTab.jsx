const CustomTab = ({ title, onClick, isActive }) => {
  return (
    <li
      className={`cursor-pointer py-2 px-4 hover:bg-black hover:text-white transition-colors duration-500 ${
        isActive && "bg-black text-white"
      }`}
      onClick={onClick}
    >
      {title}
    </li>
  );
};

export default CustomTab;
