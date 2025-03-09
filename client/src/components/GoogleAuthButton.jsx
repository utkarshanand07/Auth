import { useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import axios from "axios";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_URL =
    import.meta.env.MODE === "development"
        ? "http://localhost:5000/api/auth"
        : "/api/auth";

axios.defaults.withCredentials = true;

const GoogleAuthButton = () => {
    const { setUser, setAuth, setError, setLoading } = useAuthStore();
    const navigate = useNavigate();

    const responseGoogle = async (authResult) => {
        setLoading(true);
        try {
            if (authResult["code"]) {
                const { data } = await axios.post(`${API_URL}/google`, { code: authResult.code });
    
                const { email, name, image, token } = data.user;
    
                const userObj = { email, name, image, token };
    
                // Store user info in localStorage
                localStorage.setItem("user-info", JSON.stringify(userObj));
                localStorage.setItem("token", token); // Store JWT token separately
    
                // Update auth state
                setUser(data.user);
                setAuth(true);
                setError(null);
    
                toast.success("Login successful!");
                navigate("/dashboard");
            } else {
                throw new Error("Google authentication failed");
            }
        } catch (error) {
            console.error("Google login failed", error);
            setError(error.response?.data?.message || "Authentication failed.");
            toast.error("Google login failed.");
        } finally {
            setLoading(false);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code", // Use authorization code flow
    });

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={googleLogin}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
        >
            <span className="text-lg font-bold">Continue with Google</span>
            <FcGoogle className="w-5 h-5" />
        </motion.button>
    );
};

export default GoogleAuthButton;
