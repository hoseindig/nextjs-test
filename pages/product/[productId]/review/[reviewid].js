import { useRouter } from "next/router";
const Review = () => {
  const router = useRouter();
  const { reviewid, productId } = router.query;
  return (
    <>
      <h1>Review</h1>
      <h1>reviewid : {reviewid}</h1>
      <h1>productId : {productId}</h1>
    </>
  );
};

export default Review;
