import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
	return (
		<div className=''>
			<div className='flex h-screen'>
				<Sidebar />
				<div className='w-screen '>
					<Navbar />
					<Dashboard />
				</div>
			</div>
		</div>
	);
}
