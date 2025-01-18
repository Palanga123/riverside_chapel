import { useState } from "react"

const About = () => {

    const [tab, setTab] = useState("mission")

    const titles = [
        {
            id: 1,
            title: "Our Mission",
            state: "mission",
            description: "This is our Mission",
        },
        {
            id: 2,
            title: "Our Beliefs",
            state: "belief",
            description: "This is our Beliefs",
        }, {
            id: 1,
            title: "Our Story",
            state: "story",
            description: "This is our Story",
        }

    ]

    const title_list = titles.map((title) => (
        <button className={`py-2 px-4 duration-500 ${tab === title.state ? 'font-semibold underline underline-offset-4 text-red-700' : ''}`} onClick={() => setTab(title.state)}>
            {title.title}
        </button>
    ))
    const desc_list = titles.map((title) => (
        <span className={`duration-500 ${tab === title.state ? '' : 'hidden'}`}>
            {title.description}
        </span>
    ))

    return (
        <>
            <div className="h-80 w-full" id="hero">
                <div className='w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <div className='text-white text-center py-32'>
                        <p className='text-5xl uppercase font-extrabold'>About Us</p>
                    </div>
                </div>
            </div>


            <div className="w-11/12 md:w-4/5 mx-auto my-20">
                <div className="w-full">
                    <div className="text-center w-full">
                        {title_list}
                    </div>
                    <div className="text-center my-20">
                        {desc_list} Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus ipsam repellendus! Fugiat inventore ex, tempora reiciendis soluta tempore, totam dignissimos facere id numquam alias repellat ipsa minima nostrum veniam odit! Nemo, inventore ex velit illum atque accusamus ducimus reiciendis ipsum itaque quidem ea incidunt enim nobis omnis beatae perspiciatis hic adipisci porro numquam quae magnam? Nisi non et possimus ipsa labore voluptas nostrum ratione! Aliquid, fugit esse, voluptatibus numquam saepe deserunt ex assumenda ipsum enim, quis amet perspiciatis laudantium dolor illo molestias sint dignissimos suscipit exercitationem rerum? Unde aut fugiat, ut explicabo molestias sed alias aliquid similique iusto voluptatem.
                    </div>
                </div>
            </div>
            <div className="w-full h-56"></div>
        </>
    )
}

export default About