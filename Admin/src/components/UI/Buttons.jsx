const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`bg-black text-white p-2 hover:bg-gray-600 transition-colors duration-300 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
