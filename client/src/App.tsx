import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import ToolBar from "./components/ToolBar/ToolBar";
import CreatePost from "./components/Post/CreatePost";
import { Container } from "@mui/system";

function App(): ReactElement {
	return (
		<>
			<Routes>
				<Route path="/" element={
					<>
						<ToolBar />
						<Container sx={{ display: "flex", justifyContent: "center" }}>
							<CreatePost />
						</Container>
					</>} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
