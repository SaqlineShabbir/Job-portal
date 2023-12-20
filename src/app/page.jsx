import Footer from "@/components/Home/Fotter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LatestIntern from "@/components/Home/LatestIntern";
import LatestJobs from "@/components/Home/LatestJobs";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="">
        <h2>Hello World</h2>
        <LatestIntern />
        <LatestJobs />
        {/* All the home page section here */}
        <Footer></Footer>
      </div>
    </MaxWidthWrapper>
  );
}
