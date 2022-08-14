import { Grid } from "@mui/material";
import MyChart from "./MyChart";
import Orders from "./Orders";
import Overview from "./Overview";
import SellingProducts from "./SellingProducts";
import Users from "./Users";

function Dashboard(props) {
	return (
		<div>
			<Overview />
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				className='p-4'>
				<Grid item xs={6}>
					<MyChart />
				</Grid>
				<Grid item xs={6}>
					<Users />
				</Grid>
			</Grid>

			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				className='p-4'>
				<Grid item xs={6}>
					<Orders />
				</Grid>
				<Grid item xs={6}>
					<SellingProducts />
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;
