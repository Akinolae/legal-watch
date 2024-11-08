import { Form, Formik } from "formik";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import * as yup from "yup";

const forgotSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={forgotSchema}
      validateOnChange
    >
      {({ errors, setFieldValue, isSubmitting }) => {
        return (
          <Form>
            <CustomInput
              label="Email"
              placeholder="Enter email"
              error={errors.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <CustomButton
              text={"Submit"}
              isLoading={isSubmitting}
              className="w-full bg-red-500 mt-6 h-12 rounded-md text-cyan-50"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ForgotPasswordForm;
