import Link from "next/link";

const about = () => {
  return (
    <div className="container mx-auto mt-6">
      <h1 className="p-2">about</h1>
      <Link href="/" className="p-2 border-2 rounded-md transition-all ease-in hover:bg-gray-500 hover:text-white duration-300 ">
        Go Back
      </Link>
    </div>
  );
};

export default about;
