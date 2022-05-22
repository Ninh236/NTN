import {
	Box,
	Card,
	CardMedia
} from "@mui/material";

export default function ProfilePage() {
	return (
		<Box>
			<Card sx={{ height: "36rem", display: "flex", justifyContent: "center" }}>
				<CardMedia
					sx={{ height: "26rem", maxWidth: "75%" }}
					component="img" image={"../../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg"} />
			</Card>
		</Box >
	);
}