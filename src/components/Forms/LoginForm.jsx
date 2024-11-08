import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      validateOnChange
      onSubmit={console.log}
    >
      {({ values, errors, setFieldValue, isSubmitting }) => {
        return (
          <Form>
            <CustomInput
              error={errors.email}
              placeholder="Enter email"
              type="email"
              name="email"
              label="Email"
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <CustomInput
              type="password"
              placeholder="Enter password"
              label="Password"
              error={errors.password}
              name="password"
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
            <Link
              className="text-sm text-end text-blue-500 font-medium"
              to={"/forgotPassword"}
            >
              <p>Forgot password?</p>
            </Link>
            <CustomButton
              text={"Login"}
              isLoading={isSubmitting}
              type="submit"
              className="w-full bg-red-500 mt-6 h-12 rounded-md text-cyan-50"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
