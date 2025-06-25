import { useState } from "react"
import img from "../assets/img.jpg"

const About = () => {


    return (
        <>
            <div className="h-56 w-full" id="top">
                <div className='w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className='text-white text-center py-20'>
                        <p className='text-5xl uppercase font-extrabold'>About Us</p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-4/5 mx-auto my-20">
                <div className="w-4/5 md:w-1/3 m-auto">
                    <p className="font-extrabold text-2xl md:text-3xl text-center text-gray-900">
                        We preach <span className='text-red-700'>Christ</span> and <span className='text-red-700'>Him</span> crucified.
                    </p>
                    <p className='text-center font-bold'>1 Corinthians 1:23</p>

                </div>
                <div className="w-full mx-auto py-16 flex flex-col md:flex-row-reverse items-center">
                    <p className="font-bold text-red-800 py-2 text-3xl md:text-2xl text-center md:hidden">Our Story</p>

                    <div className="w-full md:w-1/2 py-3">
                        <img src={img} alt="culture" className='rounded md:block' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="font-bold text-red-800 py-2 text-3xl md:text-2xl text-center hidden md:block">Our Story</p>
                        <div className=''>
                            <div className='w-full md:pr-10 m-auto pt-4 pb-10 text-justify text-base'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, sint nemo! Deserunt sequi magnam veritatis recusandae ratione quibusdam optio cupiditate earum. Dolorem minus mollitia tenetur repudiandae, quas consequatur maxime praesentium nostrum sit voluptate, nam, voluptatum nisi tempora perferendis? Qui excepturi consequatur, aliquam quaerat similique in ipsam, dolorum rem dolor voluptatem consequuntur. Rerum omnis adipisci quasi tempora illum quibusdam consectetur, odio officiis autem rem harum animi repellendus magnam sunt repudiandae quae!
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="w-full mx-auto py-16 flex flex-col md:flex-row items-center">
                    <p className="font-bold text-red-800 py-2 text-3xl md:text-2xl text-center md:hidden">Our Mission</p>

                    <div className="w-full md:w-1/2 py-3">
                        <img src={img} alt="culture" className='rounded md:block' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="font-bold text-red-800 py-2 text-3xl md:text-2xl text-center hidden md:block">Our Mission</p>
                        <div className=''>
                            <div className='w-full md:pl-10 m-auto pt-4 pb-10 text-justify text-base'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsam consequatur necessitatibus incidunt numquam unde earum porro aut officia repellat quod quo eius dolore nulla a adipisci cupiditate, esse possimus rem, quaerat temporibus praesentium debitis consectetur sunt. Obcaecati perferendis eius saepe, vitae ea magnam esse unde, excepturi quas beatae doloremque? Ducimus iste iusto, veritatis, quae dolorem ex facilis maxime sit tenetur modi doloremque est corporis sunt ipsum ullam architecto. Consequuntur incidunt esse officiis itaque aliquid fuga, iure mollitia repellendus, eveniet vero facere dolores nesciunt numquam explicabo doloremque commodi sunt voluptas vel ea. A dolores, provident omnis sit vero asperiores eos.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="w-full">
                <p className="font-bold text-red-800 py-2 text-3xl md:text-2xl text-center">Our Beliefs</p>
                </div>
            </div>
            <div className="w-full h-56"></div>
        </>
    )
}

export default About