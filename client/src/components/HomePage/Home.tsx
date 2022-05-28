import { Box, Paper, Stack, styled } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { changeIsNewPostUp } from "../../store/actions/createPost/changeIsNewPostUp";
import NewPostBar from "../Post/CreatePost/NewPostBar";
import NewPostDialog from "../Post/CreatePost/NewPostDialog";
import CreatePost from "../Post/PostAction/CreatePost";
import UserPost from "../Post/UserPost/UserPost";
import { useStyle } from "./HomeStyle";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
}));

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

function Home({
	token, 
	isNewPostUploaded,
	changeIsNewPostUp,
}: ConnectedProps<typeof connector>): ReactElement {
	const styles = useStyle();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const authToken = `Bearer ${token}`;
		fetch("http://127.0.0.1:8000/api/post/get/all", {
			method: "GET",
			mode: "cors",
			headers: {
				"Authorization": authToken,
			}
		}).then(res => res.json())
			.then(data => {
				setPosts(data.data.reverse());
			});
	}, [isNewPostUploaded]);

	return (
		<Box>
			<Box>
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
										user={post.user}
										profile={post.profile}
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
		</Box>
	);
}

export default connector(Home);