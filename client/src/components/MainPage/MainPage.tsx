import { Box } from "@mui/material";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import ToolBar from "../ToolBar/ToolBar";

export default function MainPage(): ReactElement {
	return (
		<Box>
			<ToolBar />
			<Outlet />
		</Box>
	);
}