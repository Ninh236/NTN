import { Avatar, Box, Button, ButtonGroup, Card, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import PostAction from "../PostAction/PostAction";
import { useStyle } from "./UserPostStyle";
import { CommentOutlined, CommentRounded, FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CreateComment from "../PostAction/CreateComment";
import Comment from "../Comment/Comment";

interface UserPostProps {
	postId: number;
	userId: number;
}

export default function UserPost(props: any): ReactElement {
	const styles = useStyle();

	const [userData, setUserData] = useState({
		id: 0,
		fullName: "",
		username: "",
	});

	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [showComment, setShowComment] = useState<boolean>(false);

	const handleClickLike = () => {
		setIsLiked(!isLiked);
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
					<Typography variant="subtitle2"> 3 phút trước</Typography>
				</Grid>
				<Grid item xs={1}>
					<PostAction />
				</Grid>
				<Grid item xs={12} my={2} px={2}>
						asdasdasddasd
						asdasdasddasdadsa
						sda
						sdadagjgj
						sd
						adaasdx
						asdasdasddasdadsaasd
						as
						asdsssssssssssssssssssssssssssssssssssss
						asd
				</Grid>
				<Grid item xs={1} display="flex" justifyContent="center">
					<IconButton onClick={handleClickLike}>
						{isLiked ? <FavoriteRounded color="primary" /> : <FavoriteBorderRounded color="primary" />}
					</IconButton>
				</Grid>
				<Grid item xs={1}  display="flex" justifyContent="center">
					<IconButton onClick={handleClickComments} sx={{ mt: 0.35 }}>
						{showComment ? <CommentRounded color="secondary" /> : <CommentOutlined color="secondary" />}
					</IconButton>
				</Grid>
				<Grid item xs={6}></Grid>
				<Grid item display="flex" xs={4} justifyContent="space-between">
					<Typography display="inline-block" sx={{my: "auto"}} variant="subtitle2">12 người thích</Typography>
					<Typography display="inline-block" sx={{my: "auto"}} variant="subtitle2">5 bình luận</Typography>
				</Grid>
				<Grid item xs={12} display={showComment ? "block" : "none"}>
					<Comment />
					<Comment />
					<CreateComment />
				</Grid>
			</Grid>
		</Card>
	);
}