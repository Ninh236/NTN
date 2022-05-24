import React from "react";
import {
	styled,
	InputBase,
	Avatar,
	Box,
} from "@mui/material";
import ActionMessage from "../../ActionMessage/ActionMessage";

const CommentBox = styled(InputBase)`
	background: #f5f5f5 !important;
	padding-left: 1.5rem !important;
	border-radius: 25px !important;
	margin: 0 1rem !important;
	font-size: 1rem;
	font-weight: medium;
	height: 40px;
	min-width: 500px;
	justify-content: flex-start !important;
	transition-duration: 0.35s;
	"&:hover": {
		background-color: #00000015 !important;
		transition-duration: 0.35s;
	}
`;


export default function CreatePost() {

	const [commentContent, setCommentContent] = React.useState("");
	const [openMessage, setOpenMessage] = React.useState(false);

	const handlePostComment = (event: any) => {
		setCommentContent(event.target.value);
		event.target.value = "";
	};

	const handleCloseMessage = () => {
		setOpenMessage(false);
	};

	return (
		<Box sx={{ display: "flex", my: "0.5rem" }}>
			<Avatar></Avatar>
			<CommentBox placeholder="Viết bình luận..."
				onKeyPress={event => {
					if (event.key === "Enter") {
						handlePostComment(event);
						setOpenMessage(true);
					}
				}} />
			<ActionMessage success message={"Gửi bình luận thành công!"} onClose={handleCloseMessage} open={openMessage} />
		</Box>
	);
}