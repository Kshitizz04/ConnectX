/**
 * USER SCHEMA
 * =================================================================
 * _id: String
 * firstName: String
 * lastName: String
 * friends: Array<Object>
 * email: String
 * password: String
 * picturePath: String Ref
 * location: String
 * occupation: String
 * viewedProfile: Number
 * impressions: Number
 */
import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		lastName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			require: true,
			min: 5,
		},
		picturePath: {
			type: String,
			default: "",
		},
		friend: {
			type: Array,
			default: [],
		},
		location: String,
		occupation: String,
		viewedProfile: Number,
		impressions: Number,
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", UserSchema);
export default User;
