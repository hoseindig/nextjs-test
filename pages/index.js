import Link from "next/link";
const Home = () => {
  const btnHandleler = () => {};
  return (
    <div>
      <h1>home</h1>
      <Link href="/product">product</Link> |{" "}
      <Link href="/about">
        <span>about</span>
      </Link>
      <hr></hr>
      <button>go to </button>
    </div>
  );
};

export default Home;
