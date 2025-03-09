import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL =
	import.meta.env.MODE === "development"
		? "http://localhost:5000/api/auth"
		: "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,
	message: null,

	setUser: (user) => set({ user }),
	setAuth: (status) => set({ isAuthenticated: status }),
	setError: (error) => set({ error }),
	setLoading: (loading) => set({ isLoading: loading }),

	signup: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

	login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	googleLogin: async (credentialResponse) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/google-login`, { token: credentialResponse.credential });
			set({ isAuthenticated: true, user: response.data.user, error: null, isLoading: false });
			toast.success("Logged in successfully!");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in with Google", isLoading: false });
			toast.error("Google login failed");
		}
	},

	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},

	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response?.data?.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},

	updateProfile: async ({ profilePic }) => {
		set({ isUpdatingProfile: true, error: null });

		// Validate that profilePic is a string
		if (typeof profilePic !== "string") {
			set({ isUpdatingProfile: false, error: "Invalid profile picture format" });
			toast.error("Invalid profile picture format");
			return;
		}

		try {
			const response = await axios.put(`${API_URL}/update-profile`, { profilePic });

			set({ user: response.data.user, isUpdatingProfile: false });
			toast.success("Profile updated successfully");
		} catch (error) {
			set({
				error: error.response?.data?.message || "Error updating profile",
				isUpdatingProfile: false,
			});
			toast.error(error.response?.data?.message || "Error updating profile");
		}
	},

	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},

	forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response?.data?.message || "Error sending reset password email",
			});
			throw error;
		}
	},

	resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response?.data?.message || "Error resetting password",
			});
			throw error;
		}
	},
}));
