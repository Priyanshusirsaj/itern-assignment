

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-50 bg-[#FFFFFF]"> 
        <div className="px-8 py-4 md:block hidden">
            <div className="flex justify-between">
                <div className="font-extrabold font-arial ">
                    <h1>CA MONK</h1>
                </div>

                <div>
                    <ul className="flex gap-8 text-md text-gray-500">
                        <li>Tools</li>
                        <li>Practice</li>
                        <li>Event</li>
                        <li>Job Board</li>
                        <li>Points</li>
                    </ul>
                </div>

                <div>
                    <button className="bg-blue-600 text-white px-6 py-1 rounded-xl">Profile</button>
                </div>
            </div>
        </div>

       

        <div className="md:hidden flex justify-between items-center px-4 font-extrabold text-2xl py-4">
        <h1>CA MONK Blog</h1>
        <h1 className="text-4xl">📝</h1>
          
        </div>
    </div>
  )
}

export default Navbar
