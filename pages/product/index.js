import Link from "next/link";

const Product = ({ passFromParent = 111 }) => {
  return (
    <>
      <h1>Product list</h1>
      <Link href="/">
        <h1>Home</h1>
      </Link>{" "}
      | <Link href="/product/16">product16</Link> |{" "}
      <Link href="/product/13">product13</Link> |{" "}
      <Link href="/product/12" replace>
        {/* replace => when back browser botton click go root  */}
        product12
      </Link>{" "}
      | <Link href={`/product/${passFromParent}`}>{passFromParent}</Link> |{" "}
    </>
  );
};

export default Product;
