import '../components/main.css';

const Home = () => {

    
    const services = [
        {
            id: 1,
            service_name: "Adult Bible Class",
            date: "Sunday - 9:00 AM",
            location: "Kaminda Drive",
        },
        {
            id: 2,
            service_name: "Main Church Class",
            date: "Sunday - 10:00 AM",
            location: "Kaminda Drive",
        },
        {
            id: 3,
            service_name: "Holy Communion",
            date: "Sunday - 1:00 PM | Biweekly",
            location: "Kaminda Drive",
        }
    ]

    const services_list = services.map((service) => (
        <div className='py-4 border-b first:border-t ' key={service.id}>
            <p className='text-red-700 text-lg uppercase font-extrabold'>{service.service_name}</p>
            <p className='py-1 text-base'>{service.date}</p>
            <p className='py-1 text-base'>{service.location}</p>
        </div>
    ))

    return (

        <>
            
            <div className="h-[600px] w-full" id="hero">
                <div className='w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <div className='text-white text-center py-48'>
                        <p className='text-5xl uppercase font-extrabold'>Riverside Chapel</p>
                        <br />
                        <p className='py-2 font-semibold'>We preach Christ and Him Crucified <br /> 1 Corinthians 1:23</p>
                    </div>
                </div>
            </div>

            <div className='w-11/12 md:w-4/5 mx-auto my-32'>


                <div className='my-10 flex flex-col md:flex-row md:gap-x-14 space-y-20 md:space-y-0'>
                    <div className='w-full md:w-1/2 py-4'>
                        <p className='text-lg text-red-700 font-extrabold uppercase text-center'>Welcome to Riverside Chapel</p>
                        <p className='py-8 text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque cupiditate quas modi repellat voluptas sint velit soluta natus consectetur iste vero doloremque repellendus quasi enim autem id sapiente, eos excepturi ipsam voluptatem ab, quia delectus asperiores? Maiores ipsa exercitationem adipisci in, hic alias sit rem blanditiis earum ipsum voluptatibus.
                        </p>
                        <button className='py-3 md:py-4 w-full bg-red-700 text-white font-semibold uppercase'>More about riverside chapel</button>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:m-0">
                        {services_list}
                    </div>
                </div>


                {/* <div className='my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='p4 w-full'>
                            <button className='py-4 w-full bg-red-700 uppercase text-white font-semibold'>
                                Volunteer
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>


        </>
    );
}

export default Home;