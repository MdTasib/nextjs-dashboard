import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CottageIcon from "@mui/icons-material/Cottage";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupsIcon from "@mui/icons-material/Groups";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
	return (
		<div className='md:w-1/12 w-4/12 shadow-2xl bg-[#292929]'>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3 border-b-[2px]'>
				<CottageIcon className='text-white' />
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<DashboardIcon className='text-white' />
				<small className='text-white block'>Dashbord</small>
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<LocalGroceryStoreIcon className='text-white' />
				<small className='text-white block'>Orders</small>
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<ShoppingBagIcon className='text-white' />
				<small className='text-white block'>Products</small>
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<GroupsIcon className='text-white' />
				<small className='text-white block'>Customers</small>
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<ThumbUpOffAltIcon className='text-white' />
				<small className='text-white block'>Reviews</small>
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<LocalShippingIcon className='text-white' />
				<small className='text-white block'>Shopping</small>
			</div>
			<div className='text-center hover:bg-[#E2BC82] cursor-pointer p-3'>
				<SettingsIcon className='text-white' />
				<small className='text-white block'>Settings</small>
			</div>
		</div>
	);
};

export default Sidebar;
