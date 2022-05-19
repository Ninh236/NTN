import { 
	Box, 
	Button, 
	Grid, 
	Link, 
	Typography, 
	FormControlLabel, 
	Checkbox, 
	InputAdornment, 
	IconButton
} from "@mui/material";
import { ReactElement, useState } from "react";
import CustomTextField from "../CustomInput/CustomTextField/CustomTextField";
import { 
	Lock,
	Person,
	Visibility, 
	VisibilityOff 
} from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { Copyright } from "../Copyright";
import { useStyle } from "./LoginStyle";

function Login(): ReactElement {
	const styles = useStyle();

	const validate = (fieldValues = values) => {
		const tmp = { ...errors };
		
		if ("username" in fieldValues) {
			tmp.username = fieldValues.username.length > 0 ? "" : "Vui lòng điền tài khoản của bạn";
		}

		if ("password" in fieldValues) {
			tmp.password = fieldValues.password.length > 0 ? "" : "Vui lòng điền mật khẩu của bạn";
		}

		setErrors({ ...tmp });
		if (fieldValues == values) {
			return Object.values(tmp).every((x) => x == "");
		}
	};

	const {values, errors, setErrors, handleInputChange, resetForm } = 
		useForm(
			{
				username: "",
				password: "",
			}, 
			true, 
			validate
		);

	const [showPassword, setShowPassword] = useState<boolean>(false);
	
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleClickSubmit = (event: any) => {
		event.preventDefault();
		if (validate(values)) {
			console.log(values);
		}
	};

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
						Chào mừng đến với NTN
					</Typography>
					<div>
						<CustomTextField 
							required 
							label="Tài khoản" 
							name="username"
							value={values.username}
							error={errors.username}
							onChange={handleInputChange}
							autoFocus
							autoComplete="username"
							inputProps={{ maxLength: "64" }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start"><Person /></InputAdornment>
								),
							}}
						/>
					</div>
					<div>
						<CustomTextField 
							required 
							type={showPassword ? "text" : "password"} 
							label="Mật khẩu"
							name="password"
							value={values.password}
							error={errors.password}
							onChange={handleInputChange}
							inputProps={{ maxLength: "64" }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start"><Lock /></InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
										>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</div>	
					<Grid container>
						<Grid item xs>
							<FormControlLabel
								control={<Checkbox />}
								label="Duy trì đăng nhập"
							/>
						</Grid>
						<Grid item marginY="auto">
							<Link variant="body1">Quên mật khẩu ?</Link>
						</Grid>
					</Grid>
					<Button 
						fullWidth 
						variant="contained" 
						sx={{ my: 2, p: 1, fontWeight: "bold" }}
						className={styles.loginBtn}
						onClick={handleClickSubmit}
					>Đăng nhập</Button>
					<Typography 
						sx={{
							textAlign: "center",
						}} 
						variant="body1"
					>
						Bạn chưa có tài khoản ?
					</Typography>
					<Button 
						fullWidth 
						variant="outlined" 
						sx={{ my: 2, p: 1, fontWeight: "bold", borderWidth: "2px" }}
						className={styles.loginBtn}
					>Tạo tài khoản mới</Button>
					<Copyright sx={{ mt: 4, mb: 1 }} />
				</Box>
			</Box>
		</>
	);
}

export default Login;