import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import FriendsPage from "./components/FriendsPage/FriendsPage";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/LoginPage/Login";
import Registration from "./components/RegistrationPage/Registration";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SearchBar from "./components/ToolBar/SearchBar";
import { Box } from "@mui/system";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import LostConnectAlert from "./components/LostConnectAlert/LostConnectAlert";
import { findUserDataInCookies } from "./store/actions/app/findUserDataInCookies";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "./store";
import MasterDialog from "./components/MasterDialog/MasterDialog";

const theme = createTheme({
	palette: {
		primary: {
			light: "#83cda3",
			main: "#27ae60",
			dark: "#1e8449",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff95ba",
			main: "#FF7BA9",
			dark: "#b25676",
		}
	}
});

const connector = connect(
	(state: ApplicationState) => ({
		username: state.app.username,
	}),
	{
		findUserDataInCookies,
	}
);

function App({
	username,
	findUserDataInCookies,
}: ConnectedProps<typeof connector>): ReactElement {
	useEffect(() => {
		findUserDataInCookies();
	}, []);

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<LostConnectAlert />
				<MasterDialog />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/" element={<MainPage />}>
						<Route path="/home" element={<Home />} />
						<Route path="/profile" element={<Navigate to={`/profile/${username}`} />} />
						<Route path="/profile/:username" element={<ProfilePage />} />
						<Route path="/friends" element={<FriendsPage />} />
					</Route>
					<Route path="test" element={<Box><SearchBar /></Box>} />
					<Route
						path="*"
						element={
							<NotFoundPage />
						} />
				</Routes>
			</ThemeProvider>
		</React.Fragment >
	);
}

export default connector(App);