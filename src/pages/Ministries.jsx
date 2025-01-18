import img from '../assets/img.jpg';

const Ministries = () => {

    const ministries = [
        {
            id: 1,
            name: 'Mens Ministry',
            desc: 'A few words',
            photo: img,
        },
        {
            id: 2,
            name: 'Womens Ministry',
            desc: 'A few words',
            photo: img,
        },
        {
            id: 3,
            name: 'Childrens Ministry',
            desc: 'A few words',
            photo: img,
        },
        {
            id: 4,
            name: "Young People's Ministry",
            desc: 'A few words',
            photo: img,
        },
        {
            id: 5,
            name: 'Music Ministry',
            desc: 'A few words',
            photo: img,
        },
        {
            id: 6,
            name: 'Media Ministry',
            desc: 'A few words',
            photo: img,
        },
    ]

    const ministry_list = ministries.map((ministry) => (
        <>
            <div key={ministry.id} className='w-full h-full rounded-md overflow-hidden shadow'>
                <div className='w-full h-40' id="hero">

                </div>
                <div className='bg-gray-200 p-4'>
                    <p className='font-semibold'>{ministry.name}</p>
                    <p className='text-sm'>{ministry.desc}</p>
                    {/* <button className='text-sm bg-red-700 text-white py-2 w-full rounded-md mt-4'>Read More</button> */}
                    {/* <p className='text-sm text-red-700 underline'>...Read More</p> */}
                </div>
            </div>
        </>
    ))


    return(
        <>
            <div className="h-80 w-full" id="hero">
                <div className='w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <div className='text-white text-center py-32'>
                        <p className='text-5xl uppercase font-extrabold'>Ministries</p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-4/5 mx-auto my-20">
                <div className='mb-20'>
                    <h1 className='text-2xl font-bold text-red-700'>Ministries</h1>
                    <p className='py-2'>As a church, we have ministries that operate for the growth of individuals. We believe have theses ministries for the growth of individuals. We create space for discipleship and make memories together.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {ministry_list}
                </div>
            </div>
        </>
    )
}

export default Ministries