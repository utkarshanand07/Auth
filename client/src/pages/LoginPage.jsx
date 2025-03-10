import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import GoogleAuthButton from "../components/GoogleAuthButton"; // Import GoogleAuthButton

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, googleLogin, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-md w-full bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden font-[Montserrat]"
		>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-[Montserrat]">
					Welcome Back
				</h2>

				<form onSubmit={handleLogin} className="font-[Montserrat]">
					<Input icon={Mail} type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input icon={Lock} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<div className="flex items-center mb-6">
						<Link to="/forgot-password" className="text-sm text-blue-400 hover:underline">
							Forgot password?
						</Link>
					</div>
					{error && <p className="text-red-500 font-semibold mb-2">{error}</p>}
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 font-[Montserrat]"
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
					</motion.button>
				</form>

				{/* Google Login Button */}
				<div className="mt-4 w-full flex justify-center">
					<GoogleAuthButton onSuccess={googleLogin} />
				</div>
			</div>

			<div className="px-8 py-4 bg-gray-950 bg-opacity-50 flex justify-center font-[Montserrat]">
				<p className="text-sm text-gray-400">
					Don't have an account?{" "}
					<Link to="/signup" className="text-blue-400 hover:underline">
						Sign up
					</Link>
				</p>
			</div>
		</motion.div>
	);
};

export default LoginPage;
