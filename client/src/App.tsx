import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactElement } from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/LoginPage/Login";
import Registration from "./components/RegistrationPage/Registration";

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

function App(): ReactElement {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/" element={<MainPage />}>
						<Route path="/home" element={<Home />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
