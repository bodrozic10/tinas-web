import { useState } from "react";
import { signupWithEmailAndPassword } from "../api/auth";

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignupWithEmailAndPassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await signupWithEmailAndPassword({
      email,
      password,
    });
  };

  return (
    <div>
      <h1>Create An Account</h1>
      <form onSubmit={handleSignupWithEmailAndPassword}>
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
        <button type="submit">Continue</button>
      </form>
      <form style={{ marginTop: "15px" }}>
        <button>Sign in with google</button>
      </form>
    </div>
  );
}
