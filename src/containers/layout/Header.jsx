import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import { CartContext } from "@/contexts/Cart/CartProvider";
import Link from "next/link";
import { useContext } from "react";

const HeaderLinks = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "/about",
	},
];

const Header = () => {
	const { items, toggleCart } = useContext(CartContext);

	return (
		<header className="fixed top-0 w-full h-[70px] px-5 lg:px-10 z-50 flex justify-between items-center transition-all ease-in-out duration-300 text-gray-3a bg-white border-b-2 border-b-neutral-100">
			<div className="w-full flex justify-between items-center">
				<div className="flex justify-center items-center">
					<Logo />
					<div className="flex justify-center items-center">
						{HeaderLinks.map((link, index) => (
							<NavLink link={link} key={index} />
						))}
					</div>
				</div>
				<button
					onClick={() => toggleCart()}
					className="relative ml-3 pt-0.5 w-fit h-fit flex justify-center items-center cursor-pointer text-gray-3a rounded-lg text-gray-500 hover:text-violet-700 hover:stroke-[5px]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
						/>
					</svg>
					{items.length > 0 && (
						<div className="absolute -top-1/4 -right-1/2 w-5 min-w-fit h-5 p-1 text-xs flex justify-center items-center font-semibold bg-violet-700 text-white rounded-full">
							{items.length}
						</div>
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;
