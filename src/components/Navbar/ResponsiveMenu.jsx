import { MdCancel } from "react-icons/md";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
	// console.log("showMenu", showMenu);
	return (
		<>
			<div
				className={`${
					showMenu ? "left-0" : "-left-[100%]"
				} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
			>
				<div className="absolute top-0 right-0" onClick={toggleMenu}>
					<MdCancel className="text-black dark:text-white" size={35} />
				</div>
				<div className="card">
					<nav className="mt-12">
						<ul className="space-y-4 text-xl">
							{MenuLinks.map((data) => (
								<li key={data.name}>
									<a
										href={data.link}
										className="mb-5 inline-block text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
										onClick={toggleMenu}
									>
										{data.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default ResponsiveMenu;
