import { Avatar, Box, Button, ButtonGroup, Card, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import PostAction from "../PostAction/PostAction";
import { useStyle } from "./UserPostStyle";
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

	const [showComment, setShowComment] = useState<boolean>(false);

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
				<Divider variant="middle" />
				<Grid item xs={12} my={2} px={2}>
						asdasdasddasd
						asdasdasddasdadsa
						sda
						sdadagjgj
						sd
						adaasd
						asdasdasddasdadsaasd
						as
						asdsssssssssssssssssssssssssssssssssssss
						asd
				</Grid>
				<Grid item xs={12} justifyContent="space-between" display="flex">
					<Typography component="span" variant="subtitle2">12 người thích</Typography>
					<Typography component="span" variant="subtitle2">5 bình luận</Typography>
				</Grid>
				<Grid item xs={12} justifyContent="space-between">
					<ButtonGroup variant="text" fullWidth>
						<Button startIcon={<FavoriteBorderIcon />}>
								Thích
						</Button>
						<Button startIcon={<CommentOutlinedIcon />} color="secondary" onClick={handleClickComments}>
								Bình luận
						</Button>
					</ButtonGroup>
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