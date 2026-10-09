import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
     const navigate = useNavigate();    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await axios.post(
                "http://localhost:3002/api/auth/login",
                formData
            );

            alert(response.data.message);

            // Token aur user data save karo
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            setFormData({
                email: "",
                password: "",
            });

        } catch (error) {
            alert(
                error.response?.data?.message || "Login failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-72 h-72 bg-blue-600/30 rounded-full blur-3xl -top-20 -left-20"></div>
            <div className="absolute w-80 h-80 bg-purple-600/30 rounded-full blur-3xl -bottom-20 -right-20"></div>

            {/* Login Card */}
            <div className="relative w-full max-w-md">

                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">
                            Login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 text-white font-semibold shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>

                    {/* Signup link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                  onClick={() => navigate("/")}
                                className="text-blue-400 font-semibold hover:text-blue-300 transition"
                            >
                                Sign up
                            </button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;