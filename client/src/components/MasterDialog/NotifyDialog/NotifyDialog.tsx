import { DialogContent, DialogTitle, Typography } from "@mui/material";
import { ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../../store";

const connector = connect(
	(state: ApplicationState) => ({
		title: state.masterDialog.title,
		content: state.masterDialog.content,
	}),
	{}
);

function NotifyDialog({
	title,
	content,
}: ConnectedProps<typeof connector>): ReactElement {
	console.log(title, content);
	return (
		<>
			<DialogTitle>
				<Typography variant="h5" fontWeight="bold">
					{title}
				</Typography>
			</DialogTitle>
			<DialogContent>{content}</DialogContent>
		</>
	);
}

export default connector(NotifyDialog);