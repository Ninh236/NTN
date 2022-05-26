import { Box } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ApplicationState } from "../../store";
import { saveURLAfterReload } from "../../store/actions/app/saveURLAfterReload";
import ToolBar from "../ToolBar/ToolBar";
import { useStyle } from "./MainPageStyle";

const connector = connect(
	(state: ApplicationState) => ({
		isLoggedIn: state.app.isLoggedIn,
	}),
	{	
		saveURLAfterReload,
	}
);

function MainPage({
	isLoggedIn,
	saveURLAfterReload,
}: ConnectedProps<typeof connector>): ReactElement {
	const styles = useStyle();

	const navigate = useNavigate();
	const current = useParams();

	console.log(isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/login");
		}
	}, [isLoggedIn]);

	return (
		<Box className={styles.root}>
			<ToolBar />
			<Outlet />
		</Box>
	);
}

export default connector(MainPage);