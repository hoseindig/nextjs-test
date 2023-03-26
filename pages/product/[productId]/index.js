import { useRouter } from "next/router";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  // debugger;
  return (
    <>
      <Link href="/product">
        <h1>Product</h1>
      </Link>
      <h1>ProductDetail</h1>
      <h2>{productId}</h2>
    </>
  );
};

export default ProductDetail;
