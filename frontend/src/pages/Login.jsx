import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication will be wired up to POST /api/auth/login in a later phase.
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-950">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">Wildlife Conservation</h1>
        <p className="text-gray-500 mb-6">Manager / Researcher Login</p>

        <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="you@example.com"
        />

        <label className="block text-sm text-gray-600 mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="********"
        />

        <button
          type="submit"
          className="w-full bg-green-800 text-white rounded py-2 font-medium hover:bg-green-900"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
