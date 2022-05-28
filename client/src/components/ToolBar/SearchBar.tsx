import React, { ReactElement, useEffect } from "react";
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
import { ApplicationState } from "../../store";
import { connect, ConnectedProps } from "react-redux";

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

const connector = connect((state: ApplicationState) => ({
	token: state.app.token,
}), {});

function SearchBar({
	token,
}: ConnectedProps<typeof connector>): ReactElement {

	const [suggestSearch, setSuggestSearch] = React.useState([{}]);
	const [inputValue, setinputValue] = React.useState("");
	const [showSuggest, setShowSuggest] = React.useState(false);

	const handleSearching = (event: any) => {
		handleTyping;
		setinputValue(event.target.value);
		const searchContent = event.target.value;
		const hashtag = searchContent.substring(1, searchContent.length);

		console.log(hashtag);

		if (searchContent[0] == "#") {
			const authToken = `Bearer ${token}`;
			fetch(`http://127.0.0.1:8000/api/post/get/tags/${hashtag}`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": authToken,
				},
			}).then(res => {
				console.log(res);
				return res.json();
			}).then(data => {
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					console.log(data[i]);
				}
				setSuggestSearch((suggestSearch) => suggestSearch.concat(data));
				console.log("Tag State:");
				console.log(suggestSearch[0]);
				console.log(suggestSearch[1]);
				console.log(suggestSearch[2]);
				console.log(suggestSearch[3]);
			});
		}
		if (searchContent[0] == "@") {
			setSuggestSearch(["User"]);
		}
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
			<Search sx={{ display: "inline-flex" }} onClick={handleClick}>
				<SearchIconWrapper sx={{ height: "39px", padding: "0px 12px" }}>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase placeholder="Tìm kiếm…" value={inputValue} onChange={handleSearching} />
				{showSuggest ? (
					<List onClick={handleClick}
						dense
						sx={{
							width: "233.962px", bgcolor: "background.paper", position: "fixed", top: "64px",
							boxShadow: 1
						}}>
						{inputValue != "" ? (
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemAvatar>
										<Avatar />
									</ListItemAvatar>
									<ListItemText primary={inputValue} />
								</ListItemButton>
							</ListItem>
						) : null}
						{/*{suggestSearch.map((value) => {
							const labelId = `${value}`;
							return (
								<ListItem
									key={value.tag}
									disablePadding >
									<ListItemButton >
										<ListItemAvatar>
											<Avatar />
										</ListItemAvatar>
										<ListItemText id={labelId} primary={`User ${value}`} />
									</ListItemButton>
								</ListItem>
							);
						})}*/}
					</List>) : null}
			</Search>
		</ClickAwayListener >
	);
} export default connector(SearchBar);
