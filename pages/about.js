import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>about</h1>
      <Link href="/">home</Link>
      <Link href="/product/11">product</Link>
    </div>
  );
};

export default About;
