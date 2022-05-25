import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import { connect, ConnectedProps } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import { ApplicationState } from "../../store";
import ProfileMain from "./ProfileMain";

const connector = connect(
	(state: ApplicationState) => ({
		username: state.app.username,
	})
);

function ProfilePage({
	username,
}: ConnectedProps<typeof connector>): ReactElement {
	return (
		<Box>
			<ProfileHeader />
			<Box display="flex" flexDirection="row" justifyContent="center">
				<ProfileInfo username={username} />
				<ProfileMain />
			</Box>
		</Box >
	);
}

export default connector(ProfilePage);