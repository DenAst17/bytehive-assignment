import signInValidate from "./validate/sign.in.validate";
import { jwtStorageService } from "../../services/jwt.storage.service";
import toast from "react-hot-toast";
import { postApiAuthLogin } from "../../services/auth/auth";

const signInConfig = {
  initialValues: {
    email: "",
    password: "",
  },
  validate: signInValidate,
  validateOnChange: false,
  onSubmit: async (values: { email: string; password: string }) => {
    const errors = signInValidate(values);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await postApiAuthLogin(values);

        const { token } = response;

        // Save token using JwtStorageService
        jwtStorageService.setToken(token);

        window.location.replace("/");
      } catch {
        toast.error("Wrong email or password");
      }
    }
  },
};

export default signInConfig;
