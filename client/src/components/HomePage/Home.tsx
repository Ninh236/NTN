import { Box, Paper, Stack, styled } from "@mui/material";
import { ReactElement } from "react";
import NewPostBar from "../Post/CreatePost/NewPostBar";
import NewPostDialog from "../Post/CreatePost/NewPostDialog";
import CreatePost from "../Post/PostAction/CreatePost";
import UserPost from "../Post/UserPost/UserPost";
import { useStyle } from "./HomeStyle";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
}));

export default function Home(): ReactElement {
	const styles = useStyle();

	console.log(document.cookie);

	return (
		<Box>
			<Box className={styles.root}>
				<Stack spacing={2}>
					<div><NewPostBar /></div>
					<div><UserPost /></div>
					<div><UserPost /></div>
					<div><UserPost /></div>
					<div><UserPost /></div>
				</Stack>
				<NewPostDialog />
			</Box>
		</Box>
	);
}