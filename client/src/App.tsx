import { ReactElement } from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/Login";

function App(): ReactElement {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
