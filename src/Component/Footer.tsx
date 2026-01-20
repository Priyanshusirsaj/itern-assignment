
import { SlArrowDown } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="bg-gray-800 min-h-full px-2 pb-5" >
       <center>
                <div className="grid grid-cols-1 md:grid-cols-4 py-8 px-5 mt-0 mb-4 gap-4 bg-[#282828] rounded-b-2xl border text-white border-[#afadad]"> 

                            <div className="flex flex-col items-start gap-3 px-4">
                                    <h1 className="font-extrabold text-2xl">CA MONK</h1>
                                    <p className="text-sm md:block hidden text-gray-300 ">Empowering the react generation <br></br>of Financial leaders with tools,<br></br> community and Knowledge.</p>
                            </div>      


                            <div className="flex flex-col items-start gap-4 ">
                                    <div className="flex items-center justify-between"><h1 className="text-gray-400 ">RESOURCES</h1><h1 className="ml-55 md:hidden block text-gray-400"><SlArrowDown /></h1></div>
                                    <div className="md:flex hidden flex-col gap-2 text-sm text-gray-300 items-start">
                                        <p>Blog</p>
                                        <p>Webinars</p>
                                        <p>Case Studies</p>
                                    </div>
                            </div>


                            <div className="flex flex-col items-start gap-4 ">
                                    <div className="flex justify-between items-center"><h1 className="text-gray-400">PLATFORM</h1> <h1 className="ml-57 md:hidden block text-gray-400"><SlArrowDown /></h1></div>
                                    <div className="md:flex flex-col gap-2 text-sm text-gray-300 items-start hidden">
                                        <p>Job Board</p>
                                        <p>Practice Test</p>
                                        <p>Mentorship</p>
                                    </div>
                            </div>

                            <div className="flex flex-col items-start gap-4 ">
                                    <div className="flex items-center justify-between"><h1 className="text-gray-400">CONNECT</h1><h1 className="ml-60 md:hidden block text-gray-400"><SlArrowDown /></h1></div>
                                    <div className="md:flex hidden flex-col gap-2 text-sm text-gray-300 items-start">
                                        <p>Linkedin</p>
                                        <p>Twitter</p>
                                        <p>Instagram</p>
                                    </div>
                            </div>
                    </div>
       </center>
                <div className="flex justify-between px-4 py-4 text-gray-400 text-xs">
                        <div>@ 2024 CA Monk, All Rights Reserves.</div>
                        <div>Privacy Policy &nbsp; &nbsp; Terms of Service</div>
                </div>
    </div>
  )
}

export default Footer
