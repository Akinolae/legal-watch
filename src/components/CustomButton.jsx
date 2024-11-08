import { Oval } from "react-loader-spinner";

const CustomButton = ({ text, isLoading, ...props }) => {
  return (
    <button {...props}>
      <div className="flex gap-3 justify-center items-center font-bold">
        {text}
        {isLoading ? <Oval height={"30"} width={"30"} color="white" /> : null}
      </div>
    </button>
  );
};

export default CustomButton;
