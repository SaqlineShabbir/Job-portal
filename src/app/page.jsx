
import FrequentlyAsked from "@/components/Home/FrequentlyAsked";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LatestIntern from "@/components/shared/LatestIntern";
import LatestJobs from "@/components/shared/LatestJobs";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="">
        
        <LatestIntern />
        <LatestJobs />
        {/* All the home page section here */}
        <FrequentlyAsked></FrequentlyAsked>
      </div>
    </MaxWidthWrapper>
  );
}
