import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactElement } from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Registration from "./components/RegistrationPage/Registration";
import ToolBar from "./components/ToolBar/ToolBar";

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
				<ToolBar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
