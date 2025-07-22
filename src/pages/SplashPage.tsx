import { Link } from "react-router";

export default function SplashPage() {
  return (
    <div>
      <h1>Tinas Splash Page</h1>
      <Link to={"/signup"}>Register</Link>
      <br />
      <Link to={"/login"}>Log In</Link>
      <br />
      <Link to={"/dashboard"}>Dashboard</Link>
      <br />
      <Link to={"/onboarding"}>On Boarding</Link>
      <br />
      <Link to={"/profile"}>Profile</Link>
    </div>
  );
}
