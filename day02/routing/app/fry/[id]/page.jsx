const page = async ({ params }) => {
  const { id } = await params;

  return <div>튀김:{id}</div>;
};

export default page;
