import MenuList from "@/app/menuList";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="flex nav-bar pr-5">
            <Image src="/images/logo_1.webp" alt="logo" width={200} height={100} priority />
            <MenuList></MenuList>
        </nav>
    )
}