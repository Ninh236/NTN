import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import CommentActions from "./CommentActions/CommentActions";
import { useStyles } from "./CommentStyle";

export default function Comment(props: any): ReactElement {
	const styles = useStyles();

	const [userData, setUserData] = useState({
		id: 0,
		fullName: "Đoàn Duy Tùng",
		username: "tung.doan.3",
	});

	return (
		<Box className={styles.root}>
			<Grid container>
				<Grid item xs={1.5}><Avatar sx={{ width: 44, height: 44, mx: "auto" }} /></Grid>
				<Grid item xs={9.5}>
					<Grid item>
						<Typography variant="body1">
							{userData.fullName + " "} 
							<Typography component="span" variant="caption">{`@${userData.username}`}</Typography>
							{" - "} 
							<Typography component="span" variant="subtitle2" > 3 phút trước</Typography>
						</Typography>
					</Grid>
					<Grid item xs={12} my={2} pr={1}>
						<Typography variant="body2">
							asdasdasddasd
							asdasdasddasdadsa
							sda
							sdada
							sd
							adaasd
							asdasdasddasdadsaasd
							as
							asdsssssssssssssssssssssssssssssssssssss
							asd
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={1}>
					<CommentActions />
				</Grid>
			</Grid>
		</Box>
	);
}