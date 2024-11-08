import AuthWrapper from "./AuthWrapper";
import ForgotPasswordForm from "../../components/Forms/ForgotPasswordForm";
import { Link } from "react-router-dom";

const ForgotPassowrd = () => {
  return (
    <AuthWrapper className="w-full h-screen flex  justify-center items-center">
      <div className="w-2/6">
        <h1 className="font-medium text-3xl text-gray-500">Forgot password</h1>

        <ForgotPasswordForm />
        <p className="text-center mt-5">
          Remember your password ?{" "}
          <Link to={"/login"}>
            <span className=" font-medium">Login</span>
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassowrd;
