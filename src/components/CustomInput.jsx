const CustomInput = ({ error = "", value, onChange, ...props }) => {
  return (
    <div className="mt-5">
      <label htmlFor={props.label} className="text-sm text-gray-500">
        {props.label}
      </label>
      <input
        value={value}
        className="pr-4 pl-4 h-12 w-full mt-2 rounded-md outline-0 border-gray-500"
        onChange={onChange}
        style={{ borderWidth: "1px" }}
        {...props}
      />
      <p className="text-red-500 mt-1 text-sm">{error}</p>
    </div>
  );
};

export default CustomInput;
