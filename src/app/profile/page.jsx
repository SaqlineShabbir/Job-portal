import "../globals.css";
import { FiDownload } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
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
        <div className="flex flex-row mt-6 border-b pb-6 text-gray-500">
          <div className="basis-3/12">
            <p className=" ">Education</p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="">
              <h1 className="text-black font-bold">Secondary (X)</h1>
              <p>NIOS board</p>
              <p>Year of completion: 2023</p>
              <p>CGPA: 5.00/5</p>
              <button className="flex font-semibold text-blue-600 justify-center align-middle my-3">
                <FaPlus className="mt-1 me-2" /> Add Education
              </button>
            </div>
            <div className="text-lg">
              <button className="me-5 ">
                <FiEdit2 />
              </button>
              <button>
                <RiDeleteBinLine />
              </button>
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
