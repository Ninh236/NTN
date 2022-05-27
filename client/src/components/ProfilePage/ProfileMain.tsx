import {
	Box,
	Stack
} from "@mui/material";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { changeIsNewPostUp } from "../../store/actions/createPost/changeIsNewPostUp";
import NewPostBar from "../Post/CreatePost/NewPostBar";
import NewPostDialog from "../Post/CreatePost/NewPostDialog";
import UserPost from "../Post/UserPost/UserPost";

const connector = connect(
	(state: ApplicationState) => ({
		token: state.app.token,
		userId: state.app.userId,
		isNewPostUploaded: state.createPost.isNewPostUploaded,
	}), 
	{
		changeIsNewPostUp,
	}
);

function ProfileMain({
	token,
	userId,
	isNewPostUploaded,
	changeIsNewPostUp,
}: ConnectedProps<typeof connector>) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const authToken = `Bearer ${token}`;
		fetch(`http://127.0.0.1:8000/api/post/${userId}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Authorization": authToken,
				"Content-Type": "application/json",
				"Accept": "application/json",
			}
		}).then(res => res.json())
			.then(data => {
				console.log(data);
				setPosts(data.reverse());
			});
	}, [isNewPostUploaded]);

	return (
		<Box ml="0.5rem">
			<Stack spacing={2}>
				<div><NewPostBar /></div>
				{
					posts.map((post: any, index) => {
						return (
							<div key={index}>
								<UserPost 
									userId={post.user_id} 
									content={post.content} 
									image={post.image} 
									postId={post.id} 
									comments={post.comments} 
									tags={post.tags} 
									likes={post.likes} 
									createdAt={post.created_at}								
								/>
							</div>
						);
					})
				}
			</Stack>
			<NewPostDialog />
		</Box>
		
	);
}

export default connector(ProfileMain);