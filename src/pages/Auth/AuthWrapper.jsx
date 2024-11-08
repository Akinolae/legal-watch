import ComponentWrapper from "../../Layout";

const AuthWrapper = (props) => {
  return (
    <div>
      <ComponentWrapper {...props}>{props.children}</ComponentWrapper>
    </div>
  );
};

export default AuthWrapper;
