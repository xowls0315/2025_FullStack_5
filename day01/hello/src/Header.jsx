import Link from "next/link";

const Header = () => {
    return (
        <header className="container mx-auto flex items-center gap-2">
            <Link href={"/potato"}>감자탕</Link>
            <Link href={"/icecream"}>아이스크림</Link>
            <Link href={"/cu"}>씨유</Link>
            <Link href={"/coffee"}>커피</Link>
        </header>
    );
};

export default Header;
