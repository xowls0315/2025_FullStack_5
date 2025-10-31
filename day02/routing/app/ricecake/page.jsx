import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>떡볶이 페이지</div>
      <ul>
        <li>
          <Link href={"/ricecake/0"}>로제 떡볶이</Link>
        </li>
        <li>
          <Link href={"/ricecake/1"}>치즈 떡볶이</Link>
        </li>
        <li>
          <Link href={"/ricecake/2"}>마라 떡볶이</Link>
        </li>
        <li>
          <Link href={"/ricecake/3"}>일반 떡볶이</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
