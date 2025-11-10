import Animal from "@/src/Animal";
import Header from "@/src/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <Animal emoji={"🐈"} />
        </div>
    );
}
