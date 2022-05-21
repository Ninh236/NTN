import React from "react";
import {
	styled,
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Badge,
	Menu,
	MenuItem,
	Tabs,
	Tab,
	Chip,
	Avatar
} from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Home, Group, Groups } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

const StyledAppBar = styled(AppBar)`
	position: sticky;
	top: 0;
	maxHeight: 64px;
  	background-color: white;
  	color: #15bb66;
	display: flex;
`;

const StyleTab = styled(Tab)`
  	height: 64px;
	width: 8vw;
	margin: 0px 10px;
  	color: #15bb66 !important;
`;

export default function ToolBar() {

	const [tab, setTab] = React.useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleChangeTab = (event: any, newTab: any) => {
		setTab(newTab);
	};

	const handleClickAvt = () => {
		console.log("Click avatar");
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: any) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const menuId = "account-menu";
	const renderMenu = (
		<Menu
			sx={{ top: "48px", right: 0 }}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton size="large" color="inherit">
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
		</Menu>
	);

	return (
		<StyledAppBar>
			<Toolbar sx={{ width: "100vw" }}>
				<IconButton size="large" edge="start" color="inherit">
					<MenuIcon />
				</IconButton>
				<SearchBar></SearchBar>
				<Box sx={{
					display: { xs: "none", lg: "unset" }, width: "100%", height: "64px",
					position: "absolute", padding: "0px 110px"
				}}>
					<Tabs value={tab} onChange={handleChangeTab} centered>
						<StyleTab icon={
							<Home fontSize="large" />}
						/>
						<StyleTab icon={
							<Group fontSize="large" />}
						/>
						<StyleTab icon={
							<Groups fontSize="large" />}
						/>
						<StyleTab label="Icon Four" />
					</Tabs>
				</Box>
				<Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto", marginRight: { md: "auto", lg: "0" } }}>
					<IconButton size="large" color="inherit">
						<Badge badgeContent={1} color="error">
							<MailIcon />
						</Badge>
					</IconButton>
					<IconButton size="large" color="inherit">
						<Badge badgeContent={1} color="error">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<Link to="/profile" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
						<Chip
							sx={{ height: "38px", fontSize: "1rem", flexDirection: "row-reverse" }}
							avatar={<Avatar
								sx={{ width: "40px !important", height: "40px !important", marginLeft: "0 !important" }}>
							</Avatar>}
							label="Name"
							onClick={handleClickAvt} />
					</Link>
				</Box>
				<Box sx={{ height: "auto", display: { xs: "flex", md: "none" } }}>
					<IconButton size="large" onClick={handleMobileMenuOpen}>
						<MoreIcon />
					</IconButton>
				</Box>
			</Toolbar>
			{renderMobileMenu}
			{renderMenu}
		</StyledAppBar >
	);
}
