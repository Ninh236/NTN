import { Box } from "@mui/material";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import ToolBar from "../ToolBar/ToolBar";
import CreatePost from "../Post/CreatePost";

export default function MainPage(): ReactElement {
	return (
		<Box>
			<ToolBar />
			<Outlet />
		</Box>
	);
}