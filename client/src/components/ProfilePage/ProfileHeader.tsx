import React from "react";
import {
	Avatar,
	Badge,
	Box,
	Button,
	Card,
	CardMedia,
	Divider,
	Tab,
	Tabs,
	Typography
} from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
import ProfileEditAvt from "./ProfileEdit/ProfileEditAvt";
export default function ProfileHeader() {
	const [tab, setTab] = React.useState(0);
	const [openEditAvt, setOpenEditAvt] = React.useState(false);

	const handleChangeTab = (event: any, newTab: any) => {
		setTab(newTab);
	};

	const handleEditAvt = (event: any) => {
		setOpenEditAvt(true);
	};

	const handleCloseEditAvt = () => {
		setOpenEditAvt(false);
	};

	return (
		<Card sx={{ height: "38rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
			<CardMedia
				sx={{ height: "26rem", maxWidth: "75%", borderRadius: "8px", bgcolor: "#65676B" }}
				component="img" image={"../../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg"} />
			<Box sx={{ height: "8rem", width: "70%", display: "flex", alignItems: "flex-end", mb: "1rem" }}>

				<Badge
					sx={{
						"& .MuiBadge-badge": {
							height: "2.25rem", width: "2.25rem",
							borderRadius: "25px", cursor: "pointer !important"
						}
					}}
					color="primary" overlap="circular" badgeContent={<CameraAltOutlined onClick={handleEditAvt} />} >
					<Avatar sx={{
						height: "10rem", width: "10rem",
						border: "5px solid #fff", borderRadius: "100px",
					}} />
				</Badge>
				<ProfileEditAvt open={openEditAvt} close={handleCloseEditAvt} />
				<Box sx={{ display: "flex", flexDirection: "column", alignSelf: "baseline", ml: "1rem" }}>
					<Typography variant="h4" component="div" fontWeight="bold">
						{"FName LName"}
					</Typography>
					<Typography color="#65676B" fontWeight="bold">
						{"51"} bạn bè
					</Typography>
				</Box>
			</Box >
			<Divider sx={{ width: "70%" }} variant="middle" />
			<Box width="70%">
				<Tabs sx={{ alignSelf: "flex-start" }} value={tab} onChange={handleChangeTab}>
					<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Bài viết"></Tab>
					<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Thông tin"></Tab>
					<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Bạn bè"></Tab>
					<Tab sx={{ textTransform: "unset !important", fontWeight: "bold" }} label="Ảnh"></Tab>
				</Tabs>
			</Box>
		</Card >
	);
}