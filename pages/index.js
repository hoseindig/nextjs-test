import { useRouter } from "next/router";
import Link from "next/link";
const Home = () => {
  const router = useRouter();
  const btnHandleler = () => {
    router.push("/product");
    router.replace("/product");
  };
  return (
    <div>
      <h1>home</h1>
      <Link href="/product">product</Link> |{" "}
      <Link href="/about">
        <span>about</span>
      </Link>
      <hr></hr>
      <button onClick={btnHandleler}>go to </button>
    </div>
  );
};

export default Home;
