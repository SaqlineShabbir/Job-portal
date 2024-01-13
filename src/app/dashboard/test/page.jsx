import getJobs from '@/components/apiCalls/getJob';

const page = async () => {


    const response = await getJobs('658e4d937c63ef3b2b2f679b')
    // console.log('here', response)
    return (
        <div>

            <p onClick={console.log('hello')}>{response?.data.title}</p>



        </div>
    );
};

export default page;