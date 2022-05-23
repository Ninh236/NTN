import React from "react";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Divider,
	Stack,
	Tab,
	Tabs,
	Typography
} from "@mui/material";
import CreatePost from "../Post/PostAction/CreatePost";
import UserPost from "../Post/UserPost/UserPost";

export default function ProfilePage() {
	const [tab, setTab] = React.useState(0);

	const handleChangeTab = (event: any, newTab: any) => {
		setTab(newTab);
	};

	return (
		<Box>
			<Card sx={{ height: "38rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
				<CardMedia
					sx={{ height: "26rem", maxWidth: "75%", borderRadius: "8px", bgcolor: "#65676B" }}
					component="img" image={"../../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg"} />
				<Box sx={{ height: "8rem", width: "70%", display: "flex", alignItems: "flex-end", mb: "1rem" }}>
					<Avatar sx={{
						height: "10rem", width: "10rem",
						border: "5px solid #fff", borderRadius: "100px",
					}} />
					<Box sx={{ display: "flex", flexDirection: "column", alignSelf: "baseline", ml: "1rem" }}>
						<Typography variant="h4" component="div" fontWeight="bold">
							{"FName LName"}
						</Typography>
						<Typography color="#65676B" fontWeight="bold">
							{"51"} bạn bè
						</Typography>
					</Box>
				</Box>
				<Divider sx={{ width: "70%" }} variant="middle" />
				<Box width="70%">
					<Tabs sx={{ alignSelf: "flex-start" }} value={tab} onChange={handleChangeTab}>
						<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Bài viết"></Tab>
						<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Thông tin"></Tab>
						<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Bạn bè"></Tab>
						<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Ảnh"></Tab>
					</Tabs>
				</Box>
			</Card>
			<Box bgcolor="#F0F2F5" display="flex" flexDirection="row" justifyContent="center">
				<Box mt="1rem" mr="0.5rem">
					<Card sx={{ width: "400px" }}>
						<CardHeader
							title={(<Typography component="span" variant="h5" fontWeight="bold">
								Thông tin
							</Typography>)}
						/>
						<CardContent>
							<Typography variant="subtitle1" component="div">
								<div>1</div>
								<div>2</div>
								<div>3</div>
								<div>4</div>
								<div>5</div>
								<div>6</div>
							</Typography>
						</CardContent>
					</Card>
				</Box>
				<Box ml="0.5rem">
					<CreatePost />
					<Stack spacing={2}>
						<div><UserPost /></div>
						<div><UserPost /></div>
						<div><UserPost /></div>
						<div><UserPost /></div>
					</Stack>
				</Box>
			</Box>
		</Box >
	);
}