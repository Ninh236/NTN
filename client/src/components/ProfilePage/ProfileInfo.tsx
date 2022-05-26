import {
	Card,
	CardHeader,
	Typography,
	CardContent,
	Stack,
	ImageList,
	ImageListItem,
	Avatar,
	CardActions
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProfileInfo(props: any) {

	const { username } = props;

	const friends = [
		{
			name: "Tùng"
		},
		{
			name: "Nhật"
		},
		{
			name: "Ninh"
		},
		{
			name: "Hiếu"
		},
	];

	return (
		<Stack mt="1rem" mr="0.5rem" spacing={2}>
			<Card sx={{ width: "400px" }}>
				<CardHeader
					sx={{ pb: "0" }}
					title={(<Typography component="span" variant="h5" fontWeight="bold">
						Thông tin
					</Typography>)} />
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
			<Card sx={{ width: "400px", px: "0.5rem", justifyContent: "center" }}>
				<CardHeader
					sx={{ pb: "0" }}
					title={(<Typography component="span" variant="h5" fontWeight="bold">
						Bạn bè
					</Typography>)}
					subheader={<Typography color="#00000099">{51} người bạn</Typography>} />
				<ImageList sx={{ justifyItems: "center", gap: "0.5rem !important" }} cols={3}>
					{friends.map((friend) => (
						<ImageListItem key={friend.name} sx={{ width: "120px", height: "120px", alignItems: "center" }}>
							<Avatar sx={{ width: "120px", height: "120px" }} />
							<Typography variant="body2">{friend.name}</Typography>
						</ImageListItem>
					))}
				</ImageList>
				<CardActions sx={{ justifyContent: "end" }}>
					<Link style={{ color: "#27ae60", textDecoration: "none", }} to={`/${username}/friends`}>
						Xem thêm
					</Link>
				</CardActions>
			</Card>
		</Stack >
	);
}