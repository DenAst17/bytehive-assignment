import { Button, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import signInConfig from '../forms/use.signin.formik';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import './login.component.css';

const LoginComponent = () => {
  const signInFormik = useFormik(signInConfig);

  return (
    <div>
      <Box className="backContainer">
        <div className='arrowLeft'>
          <img src={ArrowLeft} />
        </div>
        <div className='backText'>
          Back
        </div>
      </Box>
      <Box component="form" onSubmit={(e) => { e.preventDefault(); }} noValidate className="loginContainer">

        <Box className="loginLinks">
          <div className='loginTitle'>
            Log in
          </div>
          <div className='registerText'>
            Don't have an account?
            <a href="#" className="registerLink">
              {"Register"}
            </a>
          </div>
        </Box>

        <TextField
          variant="filled"
          fullWidth
          id="email"
          label="Email address"
          name="email"
          autoComplete="email"
          autoFocus
          value={signInFormik.values.email}
          onChange={signInFormik.handleChange}
          error={!!signInFormik.errors.email}
          helperText={signInFormik.errors.email}
          sx={{
            margin: "16px 0px 0px",
            backgroundColor: "#fff",
            border: "1px solid #F2F4F7",
            borderRadius: "8px",
            "& .MuiFilledInput-root": {
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                borderBottom: "none",
              },
              "&.Mui-focused": {
                backgroundColor: "transparent",
              },
              "&:before, &:after, &:hover:before": {
                borderBottom: "none",
              },
            }
          }}
        />

        <TextField
          variant="filled"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={signInFormik.values.password}
          onChange={signInFormik.handleChange}
          error={!!signInFormik.errors.password}
          helperText={signInFormik.errors.password}
          sx={{
            margin: "16px 0px 0px",
            backgroundColor: "#fff",
            border: "1px solid #F2F4F7",
            "& .MuiFilledInput-root": {
              backgroundColor: "transparent",
              "&:before, &:after, &:hover:before": {
                borderBottom: "none",
              },
            }
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            background: "#6366F1",
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "26px",
            textAlign: "left",
            textTransform: "none",
            borderRadius: "12px",
            height: "42px",
            margin: "16px 0px",
          }}
          onClick={() => { signInFormik.handleSubmit(); }}
        >
          Log In
        </Button>

        <a href="#" className="forgotPasswordLink">
          Forgot password?
        </a>
      </Box>
    </div>
  );
};

export default LoginComponent;
