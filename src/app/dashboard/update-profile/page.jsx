'use client'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import { AuthContext } from '@/context/AuthProvider';

const UpdateUserForm = () => {
    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState('')
    console.log(userData)
    //hh
    const [firstname, setFirstName] = useState(userData?.firstname)
    const [lastname, setLastName] = useState(userData?.lastname)
    const [phone, setPhone] = useState(userData?.phone)
    const [image, setImage] = useState(userData?.photo)
    console.log('user from p', user)


    useEffect(() => {
        // Fetch user details for updating
        AxiosInstance.get(`/users/${user?.useridneed}`)
            .then((response) => {
                // console.log('res', response.data.data[0])
                setUserData(response.data.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
    }, [user?.useridneed]);

    const formData = new FormData()

    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('phone', phone)
    if (image) {
        formData.append('photo', image)
    }
    // Send update request to the server
    const handleSubmit = (e) => {
        e.preventDefault();

        if (image) {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            AxiosInstance.put(`/users/update?id=${user?.useridneed}`, formData, config)
                .then((response) => {
                    console.log('User updated successfully:', response.data);
                    // Handle success, e.g., redirect to user profile
                })
                .catch((error) => {
                    console.error('Error updating user:', error);
                    // Handle error, e.g., display error message to the user
                });
        } else {

            AxiosInstance.put(`/users/updateWithoutProfileImg?id=${user?.useridneed}`, {
                firstname,
                lastname,
                phone
            })
                .then((response) => {
                    console.log('User updated successfully:', response.data);
                    // Handle success, e.g., redirect to user profile
                })
                .catch((error) => {
                    console.error('Error updating user:', error);
                    // Handle error, e.g., display error message to the user
                });
        };




    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            {/* Add your form fields based on the user schema */}
            <div className=''>
                <label className="block mb-2">First Name:
                    <input
                        type="text"
                        name="firstname"
                        // value={userData?.firstname}
                        defaultValue={userData?.firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input mt-1 block w-full text-blsck border px-3 py-2"
                    />
                </label>
            </div>
            <div className=''>
                <label className="block mb-2">Last Name:
                    <input
                        type="text"
                        name="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                        defaultValue={userData?.lastname}

                        className="form-input mt-1 block w-full text-blsck border px-3 py-2"
                    />
                </label>
            </div>
            <div className=''>
                <label className="block mb-2">Phone:
                    <input
                        type="text"
                        phone="phone"

                        defaultValue={userData?.phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-input mt-1 block w-full text-blsck border px-3 py-2"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Image
                </label>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    name='photo'
                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your email"
                />
            </div>


            {/* Repeat the above pattern for other form fields */}

            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Update User
            </button>
        </form>
    );
};

export default UpdateUserForm;