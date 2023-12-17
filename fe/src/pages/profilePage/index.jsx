import { Box, useMediaQuery } from "@mui/material";
import Navbar from "pages/navbar";
import FriendListWidget from "pages/widgets/FriendListWidget";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import UserWidget from "pages/widgets/UserWidget";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
	const [user, setUser] = useState(null);
	const { userId } = useParams();
	const token = useSelector((state) => state.token);
	const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
	console.log(userId);
	const getUser = async () => {
		const response = await fetch(`http://localhost:3001/users/${userId}`, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		});
		const data = await response.json();
		// console.log(data);
		setUser(data);
	};

	useEffect(() => {
		getUser();
	}, []);

	if (!user) return null;

	return (
		<Box>
			<Navbar />
			<Box
				width="100%"
				padding="2rem 6%"
				display={isNonMobileScreens ? "flex" : "block"}
				gap="2rem"
				justifyContent="center"
			>
				<Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
					<UserWidget
						userId={userId}
						picturePath={user.picturePath}
					/>
					<Box m="2rem 0" />
					<FriendListWidget userId={userId} />
				</Box>
				<Box
					flexBasis={isNonMobileScreens ? "42%" : undefined}
					mt={isNonMobileScreens ? undefined : "2rem"}
				>
					<MyPostWidget picturePath={user.picturePath} />
					<Box m="2rem 0" />
					<PostsWidget
						userId={userId}
						isProfile
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default ProfilePage;
