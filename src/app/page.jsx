
import Banner from "@/components/Home/Banner";
import CompanyShow from "@/components/Home/CompanyShow";
import FrequentlyAsked from "@/components/Home/FrequentlyAsked";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LatestIntern from "@/components/shared/LatestIntern";
import LatestJobs from "@/components/shared/LatestJobs";

export default function Home() {
  return (
    <>
      <Banner ></Banner>
      <MaxWidthWrapper className="">
        <div className="">

          {/* <LatestIntern />
          <LatestJobs /> */}

          <FrequentlyAsked></FrequentlyAsked>
          <CompanyShow />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
