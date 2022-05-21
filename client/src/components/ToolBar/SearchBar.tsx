import React from "react";
import {
	styled,
	InputBase,
	List, ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Avatar,
	ClickAwayListener,
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
	height: "100%",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function CheckboxList() {

	const [searchHistory, setSearchHistory] = React.useState([1, 2, 3, 4]);
	const [suggestSearch, setSuggestSearch] = React.useState([0]);
	const [searchContent, setSearchContent] = React.useState("");
	const [showSuggest, setShowSuggest] = React.useState(false);

	const handleSearching = (event: any) => {
		setSearchContent(event.target.value);
		setSuggestSearch(searchHistory);
	};

	const handleClick = () => {
		setShowSuggest(true);
	};

	const handleTyping = () => {
		setShowSuggest(true);
	};

	const handleClickAway = () => {
		setShowSuggest(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<Search sx={{ display: "inline-flex" }} onClick={handleClick} onChange={handleSearching}>
				<SearchIconWrapper sx={{ height: "39px", padding: "0px 12px" }}>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase placeholder="Tìm kiếm…" onChange={handleTyping} />
				{showSuggest ? (
					<List onClick={handleClick}
						dense
						sx={{
							width: "233.962px", bgcolor: "background.paper", position: "fixed", top: "64px",
							boxShadow: 1
						}}>
						{searchContent != "" ? (
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemAvatar>
										<Avatar />
									</ListItemAvatar>
									<ListItemText primary={searchContent} />
								</ListItemButton>
							</ListItem>
						) : null}
						{suggestSearch.map((value) => {
							const labelId = `${value}`;
							return (
								<ListItem
									key={value}
									disablePadding >
									<ListItemButton >
										<ListItemAvatar>
											<Avatar />
										</ListItemAvatar>
										<ListItemText id={labelId} primary={`User ${value}`} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>) : null}
			</Search>
		</ClickAwayListener >
	);
}
