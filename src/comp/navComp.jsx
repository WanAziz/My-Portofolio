import { NavLink } from "react-router-dom";

export default function ({ padding = 0, mt = 0 }) {
    return (
        <nav className={`z-20 rounded-full flex right-0 bg-yellow-300 w-max mx-${padding} mt-${mt}`}>
            <NavLink to={'/'} className="py-2">
                <i className="rounded-full fi px-4 py-2 fi-rr-home duration-300	 hover:bg-yellow-100"></i>
            </NavLink>
            <NavLink  to={'/about'} className="py-2">
                <i className="rounded-full fi px-4 py-2 fi-rr-user duration-300	 hover:bg-yellow-100"></i>
            </NavLink>
            <NavLink  to={'/skill'} className="py-2">
                <i className="rounded-full fi px-4 py-2 fi-rr-book-alt duration-300	 hover:bg-yellow-100"></i>
            </NavLink>
            <NavLink  to={'/project'} className="py-2">
                <i className="rounded-full fi px-4 py-2 fi-rr-ballot duration-300	 hover:bg-yellow-100"></i>
            </NavLink>
            <NavLink  to={'/experience'} className="py-2">
                <i className="rounded-full fi px-4 py-2 fi-rr-briefcase duration-300	 hover:bg-yellow-100"></i>
            </NavLink>
            <NavLink  to={'/contact'} className="py-2">
                <i className="rounded-full fi px-4 py-2 fi-rr-phone-call duration-300	 hover:bg-yellow-100"></i>
            </NavLink>
        </nav>
    )
}