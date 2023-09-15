"use client";

import { useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Drawer from "./Drawer";
import Menu from "./Icons/Menu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {isOpen && <Drawer setIsOpen={setIsOpen} />}
            <div className="px-4 bg-white">
                <div className="container mx-auto h-20 flex items-center justify-between">
                    <Link href="/" className="text-black font-bold">
                        News Site
                    </Link>
                    <div className="flex items-center gap-x-3">
                        <Search />
                        <div onClick={() => setIsOpen(true)}>
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container mx-auto flex justify-between items-center h-20">
                <Link href="/">Welcome</Link>
                <ul className="flex items-center gap-x-6">
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
            </div> */}
        </div>
    );
};

export default Navbar;
