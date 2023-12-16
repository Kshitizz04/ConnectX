/**
 * POST SCHEMA
 * =================================================================
 * _id: String,
 * userId: String Ref,
 * firstName: String,
 * lastName: String,
 * location: String,
 * description: String,
 * userPicturePath: String Ref,
 * picturePath: String,
 * likes: Object<String Ref>,
 * comments: Array<String>
 */
import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		location: String,
		description: String,
		picturePath: String,
		userPicturePath: String,
		likes: {
			type: Map,
			of: Boolean,
		},
		comments: {
			type: Array,
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
