"use client";
import { AuthContext } from "@/context/AuthProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const UpdateUserForm = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  console.log("uuu", user);
  //hh
  const [firstname, setFirstName] = useState(userData?.firstname);
  const [lastname, setLastName] = useState(userData?.lastname);
  const [phone, setPhone] = useState(userData?.phone);
  const [image, setImage] = useState(userData?.photo);
  console.log("user from p", userData);
  useEffect(() => {
    if (user?._id) {
      fetch(`https://job-portal-kohl-six.vercel.app/api/user/${user?._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched user data:", data);
          setUserData(data?.user || {}); // Ensure default empty object if data is undefined
          setFirstName(data?.user?.firstname || ""); // Initialize state with fetched data
          setLastName(data?.user?.lastname || "");
          setPhone(data?.user?.phone || "");
          setImage(data?.user?.photo || "");
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [user?._id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("phone", phone);
    if (image) {
      formData.append("photo", image);
    }

    const requestOptions = {
      method: image ? "PUT" : "PUT",
      body: formData,
      headers: image ? { "Content-Type": "multipart/form-data" } : {},
    };

    fetch(
      `/users/update${image ? "" : "WithoutProfileImg"}?id=${user?._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("User updated successfully:", data);
        // Handle success, e.g., redirect to user profile
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        // Handle error, e.g., display error message to the user
      });
  };
  return (
    <div>
      <div className="lg:w-2/4  my-5">
        <div className="relative">
          <div className="p-6 rounded-md shadow  bg-white ">
            <div className="profile-pic  mb-5">
              <div>
                <div className="">
                  <Image
                    src={userData?.photo}
                    className="rounded shadow   ring-slate-50 "
                    id="profile-banner"
                    alt={`${userData?.firstName} ${userData?.lastName}`}
                    height={50}
                    width={150}
                  />
                </div>
                <div className="mt-4">
                  <h5 className="text-lg font-semibold">{`${userData?.firstname} ${userData?.lastname}`}</h5>
                  <p className="text-slate-400">{userData?.email}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-700"></div>
          </div>
        </div>
      </div>

      {/* //h */}
      <div className="p-6 rounded-md shadow bg-white">
        <h5 className="text-lg font-semibold mb-4">Personal Detail:</h5>
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="mb-2 block">
                First Name: <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name:"
                id="firstName"
                name="firstName"
                value={userData?.firstname || ""}
                readOnly
                className="form-input mt-1 block w-full border px-3 py-2"
              />
            </div>
            <div>
              <label className="mb-2 block">
                Last Name: <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name:"
                name="lastName"
                value={userData?.lastname || ""}
                readOnly
                className="form-input mt-1 block w-full border px-3 py-2"
              />
            </div>
            <div>
              <label className="mb-2 block">
                Your Email: <span className="text-red-600"></span>
              </label>
              <input
                type="email"
                placeholder="Email"
                disabled
                name="email"
                value={userData?.email || ""}
                readOnly
                className="form-input mt-1 block w-full border px-3 py-2"
              />
            </div>
            <div>
              <label className="mb-2 block">Occupation:</label>
              <input
                name="designation"
                id="occupation"
                value={userData?.designation || ""}
                readOnly
                className="form-input mt-1 block w-full border px-3 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5">
            <label className="mb-2 block">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={userData?.bio || ""}
              readOnly
              className="form-input mt-1 block w-full border px-3 py-2"
              placeholder="Enter your Bio"
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserForm;
