import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Stack,
	Typography
} from "@mui/material";

interface IFriendCardProps {
	name: string,
	description: string,
	requested: boolean,
}

export default function FriendCard(props: any) {
	const { name, requested = false,
		description = "Chào bạn, mình là " + name } = props;
	return (
		<Card sx={{ width: "200px", flexShrink: 0 }}>
			<Stack>
				<CardHeader
					avatar={<Avatar />} title={name}
					titleTypographyProps={{ fontWeight: "bold" }} />
				<Divider variant="middle" />
				<CardContent>
					<Typography>
						{description}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "center", flexDirection: "column" }}>
					{requested ? (
						<Button fullWidth>
							<Typography textTransform="none" fontWeight="bold">
								Xác nhận
							</Typography>
						</Button>
					) : (
						<Button fullWidth>
							<Typography textTransform="none" fontWeight="bold">
								Thêm bạn bè
							</Typography>
						</Button>
					)}
					{requested ? (
						<Button fullWidth sx={{ m: "0 !important" }} color="secondary">
							<Typography textTransform="none" fontWeight="bold">
								Từ chối
							</Typography>
						</Button>
					) : (
						<Button fullWidth sx={{ m: "0 !important" }} color="secondary">
							<Typography textTransform="none" fontWeight="bold">
								Xóa, gỡ bỏ
							</Typography>
						</Button>
					)}
				</CardActions>
			</Stack>
		</Card >
	);
}