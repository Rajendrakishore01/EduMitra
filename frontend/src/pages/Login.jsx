import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message === "Login Successful") {
        localStorage.setItem("user", data.user);

        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl">

        <div className="text-center mb-8">

          <div className="flex justify-center mb-4">
            <GraduationCap size={50} className="text-white" />
          </div>

          <h1 className="text-4xl font-bold text-white">
            EduMitra
          </h1>

          <p className="text-white/80 mt-2">
            Welcome back to your learning journey
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 mb-4 outline-none"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 mb-6 outline-none"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-bold py-4 rounded-xl hover:scale-105 transition"
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-white mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold underline"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;