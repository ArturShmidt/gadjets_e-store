import Image from "next/image";
import React from "react";

import pepe from "../../../../public/pepe_logo.png";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex gap-5">
            <Link href="/"><Image src={pepe} alt="logo" width={50} height={50} /></Link>
            FAKE UL
            <ul className="flex flex-row">
                <li>
                    <Link href="/Home">Home</Link>
                </li>
                <li>
                    <Link href="/Phones">Phones</Link>
                </li>
                <li>
                    <Link href="/Tablets">Tablets</Link>
                </li>
                <li>
                    <Link href="/Acceccories">Acceccories</Link>
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
            <div>
                <Link href="/favorites"><span> icon_1</span></Link>
                <Link href="/shopcard"><span>icon_2</span></Link>
            </div>
        </div>
    );
};

export default NavBar;
