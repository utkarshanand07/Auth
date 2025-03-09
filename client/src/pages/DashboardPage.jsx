import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import { Camera } from "lucide-react";

const DashboardPage = () => {
	const { user, logout, isUpdatingProfile, updateProfile } = useAuthStore();
	const [selectedImg, setSelectedImg] = useState(null);

	const handleLogout = () => {
		logout();
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = async () => {
			const base64Image = reader.result;
			setSelectedImg(base64Image);

			// Ensure profilePic is sent as an object
			await updateProfile({ profilePic: base64Image });
		};
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 font-[Montserrat]'
		>
			<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text'>
				Dashboard
			</h2>

			<div className='flex flex-col items-center gap-4 mb-4'>
				<div className='relative'>
					<img
						src={selectedImg || user.profilePic || "/avatar.png"}
						alt='Profile'
						className='size-32 rounded-full object-cover border-2 border-gray-700'
					/>
					<label
						htmlFor="avatar-upload"
						className={`absolute bottom-0 right-0 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
							}`}
					>
						{/* White circle background */}
						<div className="bg-white p-1 rounded-full flex items-center justify-center">
							<Camera className="w-5 h-5 text-gray-900" />
						</div>

						<input
							type="file"
							id="avatar-upload"
							className="hidden"
							accept="image/*"
							onChange={handleImageUpload}
							disabled={isUpdatingProfile}
						/>
					</label>
				</div>
				<p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : ""}
            </p>
			</div>

			<div className='space-y-6'>
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Profile Information</h3>
					<p className='text-gray-300'>Name: {user.name}</p>
					<p className='text-gray-300'>Email: {user.email}</p>
				</motion.div>
				<motion.div
					className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Account Activity</h3>
					<p className='text-gray-300'>
						<span className='font-bold'>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className='text-gray-300'>
						<span className='font-bold'>Last Login: </span>
						{formatDate(user.lastLogin)}
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white 
                    font-bold rounded-lg shadow-lg hover:from-blue-500 hover:to-indigo-600
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 font-[Montserrat]'
				>
					Logout
				</motion.button>
			</motion.div>
		</motion.div>
	);
};

export default DashboardPage;