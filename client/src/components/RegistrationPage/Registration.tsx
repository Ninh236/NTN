import { Person, Visibility, VisibilityOff, Copyright } from "@mui/icons-material";
import { Box, Typography, InputAdornment, IconButton, Grid, FormControlLabel, Checkbox, Button } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./RegistrationStyle";
import { CustomInput } from "../CustomInput/CustomInput";
import { useForm } from "../../hooks/useForm";
import { IGender } from "../../constants/IGender";

const genderItems: Array<IGender> = [
	{ id: 0, title: "Nam", value: "male" },
	{ id: 1, title: "Nữ", value: "female" },
	{ id: 2, title: "Khác", value: "other" }
];

function Registration(): ReactElement {
	const styles = useStyle();

	const validate = (fieldValues = values) => {
		const tmp = { ...errors };
		
	};

	const { values, setValues, errors, setErrors, handleInputChange, resetForm } = 
		useForm(
			{
				firstName: "",
				middleName: "",
				lastName: "",
				dob: null,
				gender: "male",
				username: "",
				email: "",
				password: ""
			}, 
			true, 
			validate
		);

	return (
		<>
			<Box className={styles.root}>
				<Box 
					className={styles.loginBox} 
					component="form"
				>
					<Typography 
						sx={{
							textAlign: "center",
							mb: 2,
						}} 
						variant="h5"
					>
						Đăng ký
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<CustomInput.TextField 
								name="firstName"
								label="Họ"
								value={values.firstName}
								error={errors.firstName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<CustomInput.TextField 
								name="middleName"
								label="Đệm"
								value={values.middleName}
								error={errors.middleName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<CustomInput.TextField 
								required
								name="lastName"
								label="Tên"
								value={values.lastName}
								error={errors.lastName}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomInput.DatePicker 
								label="Ngày sinh"
								value={values.dob}
								onChange={(dob: any) => {
									setValues(
										{
											...values,
											dob: dob,
										}
									);
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CustomInput.RadioGroup
								name="gender"
								label="Giới tính"
								value={values.gender}
								onChange={handleInputChange}
								items={genderItems}
							/>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default Registration;