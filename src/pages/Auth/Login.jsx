import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
import AuthWrapper from "./AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper
      page="Login"
      className="w-full h-screen flex  justify-center items-center"
    >
      <div className="w-2/6">
        <h1 className="font-medium text-3xl text-gray-500">Login</h1>

        <LoginForm />
        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link to={"/"}>
            <span className="text-blue-500">create account</span>
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
