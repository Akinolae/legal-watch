import { Formik } from "formik";
import { Form } from "react-router-dom";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import * as yup from "yup";

const regSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={regSchema}
      validateOnChange
    >
      {({ errors, isSubmitting, setFieldValue }) => {
        return (
          <Form>
            <CustomInput
              error={errors.username}
              label="Name"
              placeholder="Enter your name"
              onChange={(e) => setFieldValue("username", e.target.value)}
            />
            <CustomInput
              error={errors.email}
              type="email"
              label="Email"
              placeholder="Enter your Email"
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <CustomInput
              type="password"
              label="Password"
              placeholder="Enter password"
              error={errors.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
            <CustomInput
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
            />

            <CustomButton
              text={"Create account"}
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

export default RegistrationForm;
