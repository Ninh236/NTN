import { Box } from "@mui/material";
import { ReactElement } from "react";
import CreatePost from "../Post/CreatePost";

export default function Home(): ReactElement {
	return (
		<Box>
			<CreatePost />
		</Box>
	);
}