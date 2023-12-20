import Image from 'next/image'
import React from 'react';
import Safety from "@/assets/safety.png";

const SafetyTips = () => {
    return (
        <div className='my-10'>
            <div className=''>
                <div className='flex justify-center items-center'>
                    <Image
                        src={Safety}
                        alt='safety image'
                        width={100}
                        height={100}
                        className=''
                    />
                </div>
                <h1 className='text-5xl font-bold text-center my-4 text-slate-600'>Safety tips</h1>

                <p className='text-slate-600 text-center'>At Internshala, we are committed to making your online experience a safe and reliable one. <br /> The following information is designed to help internship/job seekers identify common red flags and avoid fraud.</p>


                <div className='w-2/3 mx-auto border p-6 rounded-md my-6'>

                    <h1 className='text-2xl font-semibold'>Asking for money</h1>

                    <p className='text-slate-600 my-2'>If an employer asks you for money in the form of training fee, application/admission fee, security deposit, test fee, laptop fee, documentation fee, interview reservation fee, etc., please do not make any payment and report him/her immediatety. Charging money is not only a violation of Internshala's rules, it is often a scam.</p>

                    <h1 className='text-2xl font-semibold'>Refusal to pay stipend/salary or issue certificate</h1>

                    <p className='text-slate-600 my-2'>On Internshala, jobs with CTC less than 2 LPA and unpaid internships are not allowed, unless explicitly mentioned so in the internship/job listing. If you come across any such incident where the stipend/salary mentioned on Internshala and the offer letter do not match, do notify us.</p>

                    <p className='text-slate-600 my-2'>There also might be a case where the employer might stop responding to you or refuse to pay you the promised salary/stipend or issue the certificate of completion, after you have performed the assigned work.</p>

                    <h1 className='text-2xl font-semibold'>Asking for irrelevant assignments</h1>

                    <p className='text-slate-600 my-2'>Any assignment that an employer asks you to do should assess your suitability for the role, and should be relevant to the profile.
                        Please report employers, if they asks you to do extremely lengthy assignments which may involve making business strategies for their company, writing multiple articles for their blog, promoting their social media accounts in your network, increasing downloads of their app, or designing multiple graphics for their company. These assignments may be a scheme by the company to get free work done.</p>

                    <h1 className='text-2xl font-semibold'>Asking for personal and bank details</h1>

                    <p className='text-slate-600 my-2'>Be cautious of employers who ask for details like PIN, pan card, bank account, credit card, OTP, Aadhar, etc., via online channels, in exchange for a ‘special offer’. This may be a scammer trying to obtain your information to impersonate you.
                        Legitimate employers would have had sufficient interaction with you through interviews and would have expressed interest in hiring you, before requesting personal information like bank account details, pan card and marksheets.</p>
                </div>
            </div>
        </div>
    )
}

export default SafetyTips