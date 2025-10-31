const page = async ({ params }) => {
  const { abc } = await params;
  const menu = ["로제", "치즈", "마라", "일반"];
  return <div>{menu[abc]} 떡볶이 상세 페이지입니다.</div>;
};

export default page;
