import "../globals.css";
import { FiDownload } from "react-icons/fi";

const Page = () => {
  return (
    <div className="lg:px-52">
      <button>Download Resume</button>
      <div className="border border-slate-100 px-[72px] py-[48px]">
        {/* Resume Header Start */}
        <div className="flex justify-between border-b pb-6">
          <div>
            <h1 className="text-3xl font-semibold">Fahim Muntashir</h1>
            <p className="text-gray-600">fahimmuntashir07@gmail.com</p>
            <p className="text-gray-600">+880 1987744337</p>
            <p className="text-gray-600">Rangpur</p>
          </div>
          <div className="flex justify-center align-middle">
            <div className="mt-1 font-lg">
              <FiDownload className="text-xl text-blue-600" />
            </div>
            <a href="" className="ms-3 mb-2 text-blue-600 font-semibold">
              Download
            </a>
          </div>
        </div>

        {/* Resume Education Start */}
        <div className="flex flex-row">
          <div className="basis-3/12">
            <p>Education</p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="">
              <h1>Secondary (X)</h1>
              <p>NIOS board</p>
              <p>NIOS board</p>
              <p>Year of completion: 2023</p>
              <button>Add Education</button>
            </div>
            <div className="">
              <button>?</button>
              <button>?</button>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
