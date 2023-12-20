
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LatestIntern from "@/components/shared/LatestIntern";
import LatestJobs from "@/components/shared/LatestJobs";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="">
        <h2>Hello World</h2>
        <LatestIntern />
        <LatestJobs />
        {/* All the home page section here */}

      </div>
    </MaxWidthWrapper>
  );
}
