import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Dialog,
	Grid,
	IconButton,
	TextField,
	Typography
} from "@mui/material";
import { Close } from "@mui/icons-material";
import React, { ReactElement, useEffect } from "react";
import DatePicker from "../../CustomInput/DatePicker/DatePicker";
import RadioGroup from "../../CustomInput/RadioGroup/RadioGroup";
import { IGender } from "../../../constants/IGender";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../../store";
import { Token } from "typescript";

const genderItems: Array<IGender> = [
	{ id: 0, title: "Nam", value: 0 },
	{ id: 1, title: "Nữ", value: 1 },
	{ id: 2, title: "Khác", value: 2 }
];

const connector = connect((state: ApplicationState) => ({
	token: state.app.token,
	username: state.app.username,
}), {});

function ProfileEditInfo(props: any): ReactElement {
	const { open, close, token, username } = props;
	const [updatedInfo, setUpdatedInfo] = React.useState({
		firstName: "",
		middleName: "",
		lastName: "",
		dob: null,
		gender: 0,
		email: "",
	});

	const requestBody = {
		//"username": updatedInfo.username,
		//"first_name": updatedInfo.firstName,
		//"surname": updatedInfo.middleName,
		//"last_name": updatedInfo.lastName,
		//"birthday": updatedInfo.dob.toISOString().slice(0, 10),
		//"gender": updatedInfo.gender,
		//"email": updatedInfo.email,
	};

	const handleInputChange = () => {
		console.log(updatedInfo.firstName);
	};

	const handleClose = () => {
		setUpdatedInfo({
			firstName: "",
			middleName: "",
			lastName: "",
			dob: null,
			gender: 0,
			email: "",
		});
		close();
	};

	const handleAcceptChange = () => {
		handleClose();
	};

	useEffect(() => {
		const authToken = `Bearer ${token}`;
		fetch(`http://127.0.0.1:8000/api/profile/get/${username}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": authToken,
			},
		})
			.then(res => {
				console.log(res);
				return res.json();
			})
			.then(data => {
				console.log(data);
			});
	});

	return (
		<Dialog open={open} onClose={handleClose}>
			<Card sx={{}}>
				<Box display="inline-flex" justifyContent="space-between" width="100%">
					<CardHeader title={
						<Typography variant="h5" fontWeight="bold">
							Thay đổi thông tin cá nhân
						</Typography>} />
					<CardActions>
						<IconButton onClick={handleClose}>
							<Close />
						</IconButton>
					</CardActions>
				</Box>
				<CardContent sx={{ display: "flex" }}>
					<Grid container xs={12} spacing={4} >
						<Grid item xs={4} >
							<TextField
								name="firstName"
								label="Họ"
								variant="standard"
								inputProps={{ maxLength: "32" }}
								value={updatedInfo.firstName}
								onChange={(event) => {
									setUpdatedInfo({
										...updatedInfo,
										firstName: event.target.value,
									});
								}} />
						</Grid>
						<Grid item xs={4}>
							<TextField
								name="middleName"
								label="Đệm"
								variant="standard"
								inputProps={{ maxLength: "32" }}
								value={updatedInfo.middleName}
								onChange={(event) => {
									setUpdatedInfo({
										...updatedInfo,
										middleName: event.target.value,
									});
								}} />
						</Grid>
						<Grid item xs={4}>
							<TextField
								name="lastName"
								label="Tên"
								variant="standard"
								inputProps={{ maxLength: "32" }}
								value={updatedInfo.lastName}
								onChange={(event) => {
									setUpdatedInfo({
										...updatedInfo,
										lastName: event.target.value,
									});
								}} />
						</Grid>
						<Grid item xs={4}>
							<DatePicker
								name="dob"
								label="Ngày sinh"
								value={updatedInfo.dob}
								onChange={(dob: any) => {
									setUpdatedInfo({
										...updatedInfo,
										dob: dob,
									});
								}}
								variant="standard" />
						</Grid>
						<Grid item xs={8}>
							<RadioGroup
								name="gender"
								label="Giới tính"
								value={updatedInfo.gender}
								onChange={(event: any) => {
									setUpdatedInfo({
										...updatedInfo,
										gender: event.target.value,
									});
								}}
								items={genderItems} />
						</Grid>
						<Grid item xs={4}>
							<TextField
								name="email"
								label="Email"
								variant="standard"
								inputProps={{ maxLength: "32" }}
								value={updatedInfo.email}
								onChange={(event) => {
									setUpdatedInfo({
										...updatedInfo,
										email: event.target.value,
									});
								}} />
						</Grid>
					</Grid>
				</CardContent>
				<CardActions sx={{ justifyContent: "end" }}>
					<Button onClick={handleAcceptChange}>
						Thay đổi
					</Button>
				</CardActions>
			</Card>
		</Dialog>
	);
}
export default connector(ProfileEditInfo);
