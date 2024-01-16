import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <>
            <section id="home" className="container items-center mx-auto sm:flex sm:justify-center mt-10">
                {/* Description start */}
                <div className="text-primary items-center p-10 space-y-3 md:max-lg:w-[60%] lg:w-[50%]">
                    <h3 className="font-semibold text-base lg:text-lg text-primaryText">Halo Semua! saya,</h3>
                    <div>
                        <h1 className="font-bold text-2xl md:max-lg:text-3xl lg:text-4xl pb-1">Muhammad Ibnu Haudiroihan</h1>
                        <h4 className="text-sm lg:text-base font-semibold text-slate-600">Junior Front-End Web Developer & Undergraduate in Computer Science</h4>
                    </div>
                    <p className="text-xs font-medium lg:text-sm text-slate-500">Setiap kode adalah narasi visual yang merefleksikan evolusi dari pemula yang bersemangat menjadi pengembang web yang penuh dedikasi.</p>
                    <Link to={""}>
                        <button className="mt-5 text-center bg-primaryText px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-secondary hover:text-forth focus:bg-third focus:text-white focus:ring-2 focus:ring-primary">
                            <span className="text-xs sm:text-sm font-bold">Hubungi Saya</span>
                        </button>
                    </Link>
                </div>
                {/* Description end */}

                {/* Hero start*/}
                <div className="items-center shadow-2xl justify-center mx-auto w-[75%] md:max-lg:w-[40%] lg:w-[30%] sm:m-0">
                    <img className="rounded-xl" src="./assets/myPhoto.jpg" alt="" />
                </div>
                {/* Hero End */}
            </section>
        </>
    )
}