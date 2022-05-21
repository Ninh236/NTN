import React from "react";
import {
	styled,
	InputBase,
	List, ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Avatar,
	ClickAwayListener
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	zIndex: 1000,
	borderRadius: theme.shape.borderRadius,
	backgroundColor: "#f5f5f5",
	"&:hover": {
		backgroundColor: "#00000015",
	},
	transitionDuration: "0.35s",
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function CheckboxList() {

	const [showSuggest, setSuggest] = React.useState(false);

	const handleClick = () => {
		setSuggest(true);
	};

	const handleTyping = () => {
		setSuggest(true);
	};

	const handleClickAway = () => {
		setSuggest(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<Search onClick={handleClick}>
				<SearchIconWrapper sx={{ height: "39px", padding: "0px 12px" }}>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase placeholder="Search…" onChange={handleTyping} />
				{showSuggest ? (
					<List onClick={handleClick}
						dense
						sx={{
							width: "233.962px", bgcolor: "background.paper", position: "absolute",
							boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
						}}>
						{[0, 1, 2, 3].map((value) => {
							const labelId = `checkbox-list-secondary-label-${value}`;
							return (
								<ListItem
									key={value}
									disablePadding >
									<ListItemButton >
										<ListItemAvatar>
											<Avatar />
										</ListItemAvatar>
										<ListItemText id={labelId} primary={`User ${value + 1}`} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>) : null}
			</Search>
		</ClickAwayListener>
	);
}
