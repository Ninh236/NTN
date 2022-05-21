import React from "react";
import {
	styled,
	Card,
	CardContent,
	Avatar,
	Button,
	ButtonBase,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

const CreatePost = styled(Card)`
	height: 125px;
	width: 500px !important;
	margin: auto;
	margin-top: 16px;
`;

const TextPostArea = styled(TextareaAutosize)`
	resize: none;
	width: 470px;
	margin: 15px;
	border: none;
	outline: none;
	font-family: inherit;
	font-size: 1.25rem;
	letter-spacing: 0.25px;
`;
const useStyles = makeStyles({
	createTextPost: {
		background: "#f5f5f5 !important",
		color: "#65676b !important",
		paddingLeft: "14px  !important",
		borderRadius: "25px  !important",
		margin: "auto !important",
		fontSize: "1.0625rem",
		fontWeight: "medium",
		height: "40px",
		minWidth: "400px",
		justifyContent: "flex-start !important",
		transitionDuration: "0.35s",
		"&:hover": {
			backgroundColor: "#00000015 !important",
			transitionDuration: "0.35s",
		}
	},

	createOtherPost: {
		height: "30px",
		fontSize: "18px",
		borderRadius: "18px	!important",
		padding: "2px 6px !important",
		fontWeight: "bold",
		"&:hover": {
			backgroundColor: "#00000015 !important",
			transitionDuration: "0.35s",
		}
	}
});

export default function CreatPost() {
	const styles = useStyles();

	const [showTextPost, setShowTextPost] = React.useState(false);

	const handleOpenTextPost = () => {
		setShowTextPost(true);
	};

	const handleCloseTextPost = () => {
		setShowTextPost(false);
	};

	return (
		<CreatePost>
			<CardContent sx={{ display: "flex" }}>
				<Avatar></Avatar>
				<ButtonBase className={styles.createTextPost} onClick={handleOpenTextPost}>
					Bạn muốn chia sẻ với mọi người gì thế?
				</ButtonBase>
				<Dialog disableAutoFocus={false}
					open={showTextPost}
					onClose={handleCloseTextPost}
					PaperProps={{
						style: {
							height: "428px",
							width: "500px",
							alignItems: "center",
						},
					}}>
					<DialogTitle fontWeight="bold">
						{"Tạo bài viết"}
					</DialogTitle>
					<DialogContent sx={{ p: 0 }}>
						<Divider />
						<TextPostArea minRows="6" maxRows="6" autoFocus
							placeholder="Chia sẻ với mọi nguời nào!" />
					</DialogContent>
					<DialogActions sx={{ width: "100%" }}>
						<Button sx={{ width: "100%", fontWeight: "bold" }}
							onClick={handleCloseTextPost}>
							Đăng
						</Button>
					</DialogActions>
				</Dialog>
			</CardContent>
			<Divider variant="middle" />
			<CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", p: "10px" }}>
				<ButtonBase className={styles.createOtherPost} >
					<VideocamOutlinedIcon sx={{ mr: "5px" }} color="error" />
					Đăng video
				</ButtonBase>
				<ButtonBase className={styles.createOtherPost}>
					<PhotoLibraryOutlinedIcon sx={{ mr: "5px" }} color="success" />
					Đăng ảnh
				</ButtonBase>
				<ButtonBase className={styles.createOtherPost}>
					<FlagOutlinedIcon sx={{ mr: "5px" }} color="info" />
					Sự kiện
				</ButtonBase>
			</CardContent>
		</CreatePost >
	);
}