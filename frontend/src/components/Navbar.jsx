import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, LogOut } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <GraduationCap className="text-blue-600" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            EduMitra
          </h1>
        </div>

        <div className="flex items-center gap-6 font-medium">

          <Link to="/home" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/resources" className="hover:text-blue-600">
            Resources
          </Link>

          <Link to="/opportunities" className="hover:text-blue-600">
            Opportunities
          </Link>

          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;