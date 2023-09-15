import Link from "next/link";
import Close from "./Icons/Close";

const Drawer = ({ setIsOpen }) => {
    return (
        <div
            className="bg-white h-screen fixed w-full z-10 text-black px-4"
            onClick={() => setIsOpen(false)}
        >
            <div className="flex items-center justify-between h-20">
                <Link href="/" className="font-bold">
                    News Site
                </Link>
                <Close />
            </div>
            <ul className="flex flex-col gap-y-6">
                <li>
                    <Link href="/categories">Categories</Link>
                </li>
                <li>
                    <Link href="/pages">Pages</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default Drawer;
