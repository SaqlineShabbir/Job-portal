import "../globals.css";
import { FiDownload } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
const Page = () => {
  return (
    <div className="lg:px-52">
      <h1 className="text-5xl text-center">Resume</h1>
      <button className="border mt-10 w-full font-semibold text-blue-500 border-blue-400 px-10 py-5">
        Download Resume
      </button>
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

        {/* Work expresience section start */}
        <div className="flex flex-row mt-6 border-b pb-6 text-gray-500">
          <div className="basis-3/12">
            <p className=" ">WORK EXPERIENCE </p>
            <p>(3 MONTHS) </p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="w-3/4">
              <h1 className="text-black font-bold">WebDeveloper</h1>
              <p>CeMRD, Virtual</p>
              <p> Job • Oct 2023 - Present (3 months) </p>
              <p>
                Joined CeMRD in October as a full-stack web developer with 3
                years of expertise in JavaScript, React JS, Next JS, Express JS,
                Mongoose, Tailwind CSS, Node JS, and TypeScript. Passionate
                about innovation in a dynamic environment
              </p>
              <div className="flex">
                <button className="flex font-semibold text-blue-600 justify-center align-middle my-3">
                  <FaPlus className="mt-1 me-2" /> Add Job
                </button>
                <button className="flex ms-8 font-semibold text-blue-600 justify-center align-middle my-3">
                  <FaPlus className="mt-1 me-2" /> Add Internship
                </button>
              </div>
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
        {/* Responsibility section start */}
        <div className="flex flex-row mt-6 border-b pb-6 text-gray-500">
          <div className="basis-3/12">
            <p className=" ">
              POSITIONS OF <br /> RESPONSIBILITY{" "}
            </p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="w-3/4">
              <h1 className="text-black font-bold">Time Sincere</h1>

              <div className="flex">
                <button className="flex font-semibold text-blue-600 justify-center align-middle my-3">
                  <FaPlus className="mt-1 me-2" /> Add position of
                  responsibility
                </button>
              </div>
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

        {/* Training and Course */}
        <div className="flex flex-row mt-6 border-b pb-6 text-gray-500">
          <div className="basis-3/12">
            <p className=" "> TRAININGS/ COURSES </p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="w-3/4">
              <h1 className="text-black font-bold">
                Complete Web Development Course Restart: 6
              </h1>
              <p>Programming Hero, Online</p>
              <p>Aug 2023 - Present</p>
              <p>
                The course excels due to its comprehensive MERN stack
                curriculum, hands-on projects, clear explanations, interactive
                coding, real-world applicability, updated content, engaging
                instructors, supportive community, flexible formats, and
                potential certification. and the best course I have ever seen
              </p>
              <div className="flex">
                <button className="flex font-semibold text-blue-600 justify-center align-middle my-3">
                  <FaPlus className="mt-1 me-2" /> Add Traininh/Course
                </button>
              </div>
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

        {/* Acompistiment additional details */}
        <div className="flex flex-row mt-6 border-b pb-6 text-gray-500">
          <div className="basis-3/12">
            <p className=" ">
              ACCOMPLISHMENTS/ <br />
              ADDITIONAL DETAILS{" "}
            </p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="w-3/4">
              <h1 className="text-black font-bold">Job Portalr</h1>
              <p>CeMRD, Virtual</p>
              <p> Job • Oct 2023 - Present (3 months) </p>
              <p>This is A nice project there form i Learn lot of.</p>
              <div className="flex">
                <button className="flex font-semibold text-blue-600 justify-center align-middle my-3">
                  <FaPlus className="mt-1 me-2" /> Add accomplishment/
                  additional detail
                </button>
              </div>
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

        {/* Skills */}

        <div className="flex flex-row mt-6 border-b pb-6 text-gray-500">
          <div className="basis-3/12">
            <p className=" ">Skills</p>
          </div>
          <div className="basis-9/12 flex justify-between">
            <div className="">
              <h1 className="text-black font-bold">Skills</h1>
              <p>Level</p>
              <button className="flex font-semibold text-blue-600 justify-center align-middle my-3">
                <FaPlus className="mt-1 me-2" /> Add Skills
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
      </div>
    </div>
  );
};

export default Page;
