import { useState } from "react";
import { Navigate} from "react-router-dom"

export default function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
      credentials: 'include',
    });
    if (response.ok) {
        alert('Login successful')
        setRedirect(true)
    } else {
        alert('wrong credential')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
