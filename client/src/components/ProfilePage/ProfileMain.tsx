import {
	Box,
	Stack
} from "@mui/material";
import CreatePost from "../Post/PostAction/CreatePost";
import UserPost from "../Post/UserPost/UserPost";

export default function ProfileMain() {
	return (
		<Box ml="0.5rem">
			<CreatePost />
			<Stack spacing={2}>
				<div><UserPost /></div>
				<div><UserPost /></div>
				<div><UserPost /></div>
				<div><UserPost /></div>
			</Stack>
		</Box>
	);
}