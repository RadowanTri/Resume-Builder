import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlState = searchParams.get("state") || "login";
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Mock auth - use form data for demo persistence
      login(formData);
      navigate("/app", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleState = () => {
    setSearchParams({ state: urlState === "login" ? "signup" : "login" });
    // Reset form for new state
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {urlState === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        {urlState !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon size={16} color="#6B7280" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={16} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={16} color="#6B7280" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left text-green-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>

        {/* Demo credentials hint */}
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-xs mb-1">💡 Demo Login:</p>
          <p className="text-green-700 text-xs">Email: demo@example.com</p>
          <p className="text-green-700 text-xs">Password: 123456</p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {submitting ? "Signing in..." : (urlState === "login" ? "Login" : "Sign up")}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          {urlState === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={toggleState}
            className="text-green-500 hover:underline cursor-pointer"
          >
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
