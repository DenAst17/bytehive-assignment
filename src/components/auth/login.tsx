import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      // Call the login API
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleLogin}
      >
        Log In
      </Button>
    </Box>
  );
};

export default LoginComponent;
