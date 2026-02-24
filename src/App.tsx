import "./App.css";
import { Outlet } from "react-router";

function App() {
  console.log('hello world')
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
