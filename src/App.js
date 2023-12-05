import { Outlet } from "react-router-dom";
import Navbar from "./pages/components/Navbar";


function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <div className="container bg-slate-200  h-full" >
        <Navbar />
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
