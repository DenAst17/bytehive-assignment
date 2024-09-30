import { FormikErrors } from "formik";
import { REGEXES } from "../../../consts/regex.const";
import { LoginRequestDto } from "../../../models";

const signInValidate = (values: LoginRequestDto) => {
  let errors = {} as FormikErrors<LoginRequestDto>;
  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length > 50) {
    errors.email = "Too long";
  } else if (values.email.match(REGEXES.EMAIL) === null) {
    errors.email = "Must have email format example@gmail.com";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 30) {
    errors.password = "Too long";
  } else if (values.password.length < 8) {
    errors.password = "Too short";
  }
  return errors;
};

export default signInValidate;
