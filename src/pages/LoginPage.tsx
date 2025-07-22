import { useState } from "react";
import { loginWithEmailAndPassword } from "../api/auth";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginWithEmailAndPassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await loginWithEmailAndPassword({
      email,
      password,
    });
  };

  return (
    <div>
      <h1>Welcome back</h1>
      <form onSubmit={handleLoginWithEmailAndPassword}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
      <form style={{ marginTop: "15px" }}>
        <button>Sign in with google</button>
      </form>
    </div>
  );
}
