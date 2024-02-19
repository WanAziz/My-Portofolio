import { NavLink } from "react-router-dom"

export default function () {
    return (
        <aside className='bg-white flex-col w-1/5 h-screen cursor-default shadow-2xl shadow-gray-500 z-10'>
            <img src="img/user.png" className="bg-white h-2/6 object-contain" alt="" />
            <div className="h-2/3 flex flex-col items-center justify-center text-center font-sand text-3xl bg-yellow-300 font-semibold">
                <NavLink to={'/'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max py-2 px-3 my-5">HOME</h1>
                </NavLink>
                <NavLink to={'/about'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max py-2 px-3 my-5">ABOUT ME</h1>
                </NavLink>
                <NavLink to={'/skill'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max py-2 px-3 my-5">SKILL</h1>
                </NavLink>
                <NavLink to={'/project'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max py-2 px-3 my-5">PROJECT</h1>
                </NavLink>
                <NavLink to={'/experience'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max py-2 px-3 my-5">EXPERIENCE</h1>
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive}) =>
                    isActive ? "text-white" : "hover:text-white duration-300"
                }>
                    <h1 className="w-max py-2 px-3 my-5">CONTACT</h1>
                </NavLink>
            </div>
        </aside>
    )
}