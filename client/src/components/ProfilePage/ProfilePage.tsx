import { ReactElement, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { connect, ConnectedProps } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import { ApplicationState } from "../../store";
import ProfileMain from "./ProfileMain";
import { useParams } from "react-router-dom";

const connector = connect(
	(state: ApplicationState) => ({
		token: state.app.token,
		username1: state.app.username,
	})
);

function ProfilePage({
	token,
	username1,
}: ConnectedProps<typeof connector>): ReactElement {
	const { username } = useParams();

	console.log(username);

	return (
		<Box>
			<ProfileHeader />
			<Box display="flex" flexDirection="row" justifyContent="center">
				<ProfileInfo />
				<ProfileMain />
			</Box>
		</Box >
	);
}

export default connector(ProfilePage);