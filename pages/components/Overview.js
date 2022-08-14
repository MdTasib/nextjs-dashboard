import {
	Avatar,
	Box,
	Grid,
	Icon,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

const fakeData = [
	{
		icon: "GroupsIcon",
		number: 20,
		title: "Customers",
		value: "-10% Inc",
		color: "green",
	},
	{
		icon: "GroupsIcon",
		number: 60,
		title: "Orders",
		value: "+20% Inc",
		color: "green",
	},
	{
		icon: "GroupsIcon",
		number: 40,
		title: "Reviews",
		value: "+20% Inc",
		color: "green",
	},
	{
		icon: "GroupsIcon",
		number: 10,
		title: "AVG Order",
		value: "-20% Inc",
		color: "green",
	},
];

function Overview() {
	return (
		<Box p={3}>
			<Typography variant='p' gutterBottom component='p'>
				Dashboard
			</Typography>

			<Grid container spacing={2} pt={2}>
				{fakeData.map((data, index) => {
					return (
						<Grid key={index} item xs={6} sm={3}>
							<ListItem className='border-2 rounded-md border-slate-50'>
								<ListItemAvatar>
									<Avatar className='bg-gray-200'>
										<GroupsIcon className='text-[#E2BC82]' />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={data.number} secondary={data.title} />

								<Typography
									variant='p'
									gutterBottom
									component='p'
									className={`text-${data.color}-400`}>
									{data.value}
								</Typography>
							</ListItem>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

export default Overview;
