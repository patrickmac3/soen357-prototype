import { Outlet } from "react-router-dom";
import Navbar from "./pages/components/Navbar";


function App() {
  return (
    <div className="App">
      {/* <div className="h-screen"> */}
        <div className=" bg-slate-200   min-h-screen" >
        <Navbar />
        <Outlet />
        </div>
      </div>
    // </div>
  );
}

export default App;
