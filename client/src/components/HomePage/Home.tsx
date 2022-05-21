import { Box, Container, Grid, Paper, Stack, styled } from "@mui/material";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import UserPost from "../Post/UserPost/UserPost";
import ToolBar from "../ToolBar/ToolBar";
import { useStyle } from "./HomeStyle";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
}));

export default function Home(): ReactElement {
	const styles = useStyle();

	return (
		<Box className={styles.root}>
			<Stack spacing={2}>
				<div><UserPost /></div>
				<div><UserPost /></div>
				<div><UserPost /></div>
				<div><UserPost /></div>
			</Stack>
		</Box>
	);
}