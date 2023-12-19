import Footer from "@/components/Home/Fotter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="">
        <h2>Hello World</h2>

        {/* All the home page section here */}
        <Footer></Footer>
      </div>
    </MaxWidthWrapper>
  );
}
