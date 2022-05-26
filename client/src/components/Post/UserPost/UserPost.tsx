import { Avatar, Box, Button, ButtonGroup, Card, Chip, Container, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import PostAction from "../PostAction/PostAction";
import { useStyle } from "./UserPostStyle";
import { CommentOutlined, CommentRounded, FavoriteBorderRounded, FavoriteRounded, TagSharp } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CreateComment from "../PostAction/CreateComment";
import Comment from "../Comment/Comment";
import { ApplicationState } from "../../../store";
import { connect, ConnectedProps } from "react-redux";
import { Hashtag } from "../CreatePost/NewPostDialog";

const Input = styled("input")({
	display: "none",
});

const ListItem = styled("li")(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

interface PostComment {
	userId: number, 
	content: string,
	createdAt: string,
}

interface PostProp {
	postId: number;
	userId: number;
	content: string;
	image: string | null;
	comments: PostComment[];
	tags: [];
	likes: [];
	createdAt: string,
}

const initialProp: PostProp = {
	postId: 0,
	userId: 0,
	content: "",
	image: null,
	comments: [],
	tags: [],
	likes: [],
	createdAt: "",
};

const connector = connect((state: ApplicationState) => ({token: state.app.token}), {});

function UserPost(props: any): ReactElement {
	const { token, ...others } = props;
	const authToken = `Bearer ${token}`;
	const styles = useStyle();
	const [userData, setUserData] = useState({
		fullName: "",
		username: "",
	});

	let tmpLike = false;
	for (let i = 0; i < props.likes.length; i++) {
		if (props.likes[i].user_id === props.userId) {
			tmpLike = true;
			break;
		}
	}

	const [likesCnt, setLikesCnt] = useState<number>(props.likes.length);
	const [isLiked, setIsLiked] = useState<boolean>(tmpLike);
	const [showComment, setShowComment] = useState<boolean>(false);
		
	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/profile/getid/${props.userId}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Authorization": authToken,
			}
		})
			.then(res => res.json())
			.then(data => {
				setUserData({
					fullName: `${data[0].profile.first_name} ${data[0].profile.surname} ${data[0].profile.last_name}`,
					username: data[0].username,
				});
			});
	}, []);

	const handleClickLike = () => {
		fetch(`http://127.0.0.1:8000/api/like/${props.postId}`, {
			method: "POST", 
			mode: "cors",
			headers: {
				"Authorization": authToken,
			}
		}).then(res => res.json());
		setIsLiked(!isLiked);
		if (isLiked) setLikesCnt(likesCnt - 1);
		else setLikesCnt(likesCnt + 1);
	};

	const handleClickComments = () => {
		setShowComment(!showComment);
	};

	return (
		<Card className={styles.root}>
			<Grid container>
				<Grid item xs={1}><Avatar sx={{ width: 44, height: 44, mx: "auto" }} /></Grid>
				<Grid item xs={10}>
					<Typography variant="body1">
						{userData.fullName} <Typography component="span" variant="caption">{`@${userData.username}`}</Typography>
					</Typography>
					<Typography variant="subtitle2">{new Date(props.createdAt).toLocaleString()}</Typography>
				</Grid>
				<Grid item xs={1}>
					<PostAction />
				</Grid>
				<Grid item xs={12} my={2} px={2}>
					{props.content.split("\n").map((text: string, index: number) => (<p style={{ marginTop: 0 }} key={index}>{text}</p>))}
				</Grid>
				{props.image && (
					<Grid item xs={12} my={2} px={2}>
						<img style={{ width: "100%" }} src={`http://127.0.0.1:8000/storage/${props.image}`}alt="" />
					</Grid>
				)}
				<Grid item xs={12}>
					<Divider variant="middle"/>
					<Box component="ul"
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							flexWrap: "wrap",
							listStyle: "none",
							p: 0.5,
							m: 0,
							overflow: "hidden"
						}}
					>
						{props.tags.map((hashtag: any, index: number) => (
							<ListItem key={index}>
								<Chip color="primary" label={`#${hashtag.hashtag}`}/>
							</ListItem>
						))}
					</Box>
				</Grid>
				<Grid item xs={1} display="flex" justifyContent="center">
					<IconButton onClick={handleClickLike}>
						{isLiked ? <FavoriteRounded color="primary" /> : <FavoriteBorderRounded color="primary" />}
					</IconButton>
				</Grid>
				<Grid item xs={1} display="flex" justifyContent="center">
					<IconButton onClick={handleClickComments} sx={{ mt: 0.35 }}>
						{showComment ? <CommentRounded color="secondary" /> : <CommentOutlined color="secondary" />}
					</IconButton>
				</Grid>
				<Grid item xs={6}></Grid>
				<Grid item display="flex" xs={4} justifyContent="space-between">
					<Typography display="inline-block" sx={{ my: "auto" }} variant="subtitle2">
						{`${likesCnt} người thích`}
					</Typography>
					<Typography display="inline-block" sx={{ my: "auto" }} variant="subtitle2">
						{`${props.comments.length} bình luận`}
					</Typography>
				</Grid>
				<Grid item xs={12} display={showComment ? "block" : "none"}>
					{
						props.comments.map((comment: any, index: number) => {
							return (
								<Comment key={index} 
									userId={comment.user_id} 
									postId={comment.post_id} 
									content={comment.content} 
									createAt={comment.created_at} 

								/>
							);
						})
					}
					<CreateComment />
				</Grid>
			</Grid>
		</Card>
	);
}

export default connector(UserPost);