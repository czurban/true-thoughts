import { NavLink, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Storage from "./pages/Storage";

function App() {
  const navStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-200 pb-1 ${
      isActive
        ? "text-white border-b-2 border-white font-bold"
        : "text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent font-medium"
    }`;
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="flex flex-row text-white gap-7 h-12 font-bold w-full justify-center pt-4 cursor-pointer text-lg">
        <NavLink to="/" className={navStyles}>
          Thoughts
        </NavLink>
        <NavLink to="/storage" className={navStyles}>
          Storage
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </div>
  );
}

export default App;
