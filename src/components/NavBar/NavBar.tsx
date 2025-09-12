import Image from "next/image";
import React from "react";

import pepe from "../../../public/pepe_logo.png";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex gap-5">
            <Link href="/"><Image src={pepe} alt="logo" width={50} height={50} /></Link>
            <ul className="flex flex-row gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/phones">Phones</Link>
                </li>
                <li>
                    <Link href="/tablets">Tablets</Link>
                </li>
                <li>
                    <Link href="/accessories">Accessories</Link>
                </li>
                <li>
                    <Link href=""></Link>
                </li>
            </ul>
            {/* WORKIND UL
            <ul className="flex flex-row gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link href="/itemcard">ItemCard</Link>
                    </li>
            </ul> */}
            <div className="flex flex-row ml-auto">
                <Link href="/favorites"><span> icon_1</span></Link>
                <Link href="/cart"><span>icon_2</span></Link>
            </div>
        </div>
    );
};

export default NavBar;
