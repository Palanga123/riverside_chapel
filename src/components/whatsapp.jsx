import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {

    return(
        <>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="h-10 md:h-14 fixed right-4 bottom-6 w-full flex flex-row-reverse">
                    <a href="https://wa.me/+260974323234?text=Hi,%20can%20I%20get%20a%20loan?">
                        <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-green-600 hover:bg-green-500 duration-500">
                            <button className="h-full w-full text-white bg-transparent px-3 md:px-[18px] rounded-full md:text-xl"><FaWhatsapp/></button>
                        </div>
                   </a>
                </div>  
            </div>
        </>
    );

}

export default Whatsapp;