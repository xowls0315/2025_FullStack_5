import Link from "next/link";

const Header = () => {
    return (
        <header className={"w-full h-[100px] bg-black"}>
            <div
                className={
                    "w-full max-w-[1040px] mx-auto h-[100%] flex items-center justify-around"
                }
            >
                <Link
                    href={"/"}
                    className={
                        "bg-gradient-to-r from-[#F289FF] via-[#9384FE] via-[#80B4FF] to-[#CADDE9] bg-clip-text text-transparent font-bold text-4xl cursor-pointer"
                    }
                >
                    태진위키
                </Link>
                <Link
                    href={"/introduction"}
                    className={
                        "bg-gradient-to-r from-[#F289FF] via-[#9384FE] via-[#80B4FF] to-[#CADDE9] bg-clip-text text-transparent font-bold text-2xl cursor-pointer"
                    }
                >
                    소개
                </Link>
                <Link
                    href={"/portfolio"}
                    className={
                        "bg-gradient-to-r from-[#F289FF] via-[#9384FE] via-[#80B4FF] to-[#CADDE9] bg-clip-text text-transparent font-bold text-2xl cursor-pointer"
                    }
                >
                    포트폴리오
                </Link>
                <Link
                    href={"/career"}
                    className={
                        "bg-gradient-to-r from-[#F289FF] via-[#9384FE] via-[#80B4FF] to-[#CADDE9] bg-clip-text text-transparent font-bold text-2xl cursor-pointer"
                    }
                >
                    이력 사항
                </Link>
            </div>
        </header>
    );
};

export default Header;
