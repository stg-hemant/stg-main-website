import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-96">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#000000"
        secondaryColor="#000000"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
