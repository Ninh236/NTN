import React, { ReactElement } from "react";
import {
	Avatar,
	Badge,
	Box,
	Card,
	CardMedia,
	Divider,
	Button,
	Tab,
	Tabs,
	Typography
} from "@mui/material";
import { CameraAltOutlined, Edit } from "@mui/icons-material";
import ProfileEditAvt from "./ProfileEdit/ProfileEditAvt";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import ProfileEditInfo from "./ProfileEdit/ProfileEditInfo";

const connector = connect((state: ApplicationState) => ({
	token: state.app.token,
	username: state.app.username,
}), {});

function ProfileHeader({
	token,
	username
}: ConnectedProps<typeof connector>): ReactElement {


	React.useEffect(() => {
		const authToken = `Bearer ${token}`;
		fetch(`http://127.0.0.1:8000/api/profile/get/${username}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Accept": "application/json",
				"Authorization": authToken,
			},
		}).then(res => {
			console.log(res.status);
			return res.json();
		}).then(data => {
			setUser({
				fullName: `${data[0].profile.first_name} ${data[0].profile.surname} ${data[0].profile.last_name}`,
			});
		});
	}, []);


	const [user, setUser] = React.useState({
		fullName: "",
	});
	const [tab, setTab] = React.useState(0);
	const [openEditInfo, setOpenEditInfo] = React.useState(false);
	const [openEditAvt, setOpenEditAvt] = React.useState(false);

	const handleChangeTab = (event: any, newTab: any) => {
		setTab(newTab);
	};

	const handleEditInfo = () => {
		setOpenEditInfo(true);
	};

	const handleCloseEditInfo = () => {
		setOpenEditInfo(false);
	};

	const handleEditAvt = () => {
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
						{user.fullName}
					</Typography>
					<Typography color="#65676B" fontWeight="bold">
						{"51"} bạn bè
					</Typography>
					<Button sx={{
						bgcolor: "#00000014 !important", width: "11rem",
						textTransform: "none", justifyContent: "start", p: 0.2, mt: 2
					}} onClick={handleEditInfo}>
						<Edit sx={{ ml: 1 }} />
						Chỉnh sửa thông tin
					</Button>
					<ProfileEditInfo open={openEditInfo} close={handleCloseEditInfo} />
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
export default connector(ProfileHeader);