import { Link } from "react-router-dom";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import AuthWrapper from "./AuthWrapper";

const Register = () => {
  return (
    <AuthWrapper className="w-full h-screen flex  justify-center items-center">
      <div className="w-2/6">
        <h1 className="font-medium text-3xl text-gray-500">
          Create an account
        </h1>

        <RegistrationForm />
        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className=" font-medium">Login</span>
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Register;
