import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: function () {
                return this.authType === "email"; // Password required only for email users
            },
        },
        name: {
            type: String,
            required: true,
        },
        lastLogin: {
            type: Date,
            default: Date.now,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        profilePic: {
            type: String,
            default: "",
        },
        resetPasswordToken: String,
        resetPasswordExpiresAt: Date,
        verificationToken: String,
        verificationTokenExpiresAt: Date,
        authType: {
            type: String,
            enum: ["email", "google"],
            default: "email",
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);