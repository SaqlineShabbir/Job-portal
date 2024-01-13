'use client'
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const JobForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        aboutwork: '',
        aboutcompany: '',
        skills: '',
        numberofopening: '',
        status: '',
        jobtype: '', // Default value
        locationtype: '', // Default value
        jobtimetype: '', // Default value
        duration: '',
        location: '',
        salary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    //handlesubmit
    const handleSubmit = async (e) => {

        e.preventDefault()
        console.log(formData)
        try {
            const res = await AxiosInstance.post('/jobs',
                formData
            )

            console.log('resfrom login', res)

            if (res.statusText === 'Created') {

                toast.success("Created Job successfully!")
                setFormData({
                    title: '',
                    aboutwork: '',
                    aboutcompany: '',
                    skills: '',
                    numberofopening: '',
                    status: '',
                    jobtype: '', // Default value
                    locationtype: '', // Default value
                    jobtimetype: '', // Default value
                    duration: '',
                    location: '',
                    salary: '',
                })

            }

        } catch (err) {
            toast.error(`Could not created job cause ${err.message}`)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                {/* Repeat similar structure for other form fields */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select name="status" value={formData.status} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full">
                        <option value="Remote">Actively Hiring</option>
                        <option value="Onside">Hiring Once</option>
                    </select>
                </div>
                <Toaster />
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Type</label>
                    <select name="jobtype" value={formData.jobtype} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full">
                        <option value="Job">Job</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location Type</label>
                    <select name="locationtype" value={formData.locationtype} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full">
                        <option value="Remote">Remote</option>
                        <option value="Onside">Onside</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Time Type</label>
                    <select name="jobtimetype" value={formData.jobtimetype} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Salary</label>
                    <input type="number" name="salary" value={formData.salary} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">About work</label>
                    <textarea type="text" name="aboutwork" value={formData.aboutwork} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Required Skills</label>
                    <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">About Your Company</label>
                    <textarea type="text" name="aboutcompany" value={formData.aboutcompany} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number Of Opening</label>
                    <input type="number" name="numberofopening" value={formData.numberofopening} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-20 py-1 hover:bg-blue-700">Submit</button>
            </form>
        </div>
    );
};

export default JobForm;