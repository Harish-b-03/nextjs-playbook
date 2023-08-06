import Link from "next/link";

const NavLink = ({ link }) => {
	return (
		<Link href={link.link} className="mx-2 text-sm">
			{link.name}
		</Link>
	);
};

export default NavLink;
