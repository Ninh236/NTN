import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import CreatPost from "./components/Post/CreatePost";
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
				<Routes>
					<Route path="/" element={
						<>
							<ToolBar />
							<CreatPost />
						</>
					}></Route>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
				</Routes>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
