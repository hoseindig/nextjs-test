import { useRouter } from "next/router";
import Link from "next/link";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  const showParams = () => {
    return params.map((itm, index) => {
      return <h4 key={index}>{itm}</h4>;
    });
  };
  console.log(params);
  return (
    <div>
      <h1>Docs</h1>
      <h4>
        <Link href="/">home</Link>
      </h4>
      {showParams()}
    </div>
  );
};

export default Docs;
