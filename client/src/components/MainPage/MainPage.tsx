import { Box } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { ApplicationState } from "../../store";
import ToolBar from "../ToolBar/ToolBar";

const connector = connect(
	(state: ApplicationState) => ({
		isLoggedIn: state.app.isLoggedIn,
	}),
	{

	}
);

function MainPage({
	isLoggedIn,
}: ConnectedProps<typeof connector>): ReactElement {
	const navigate = useNavigate();
	
	console.log(isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/login");
		}
	}, [isLoggedIn]);

	return (
		<Box>
			<ToolBar />
			<Outlet />
		</Box>
	);
}

export default connector(MainPage);