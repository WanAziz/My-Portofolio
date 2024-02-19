import Sidebar from "../comp/sideBar"
import Header from "../comp/header"

export default function () {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <section className='w-4/5 bg-gray-200'>
                    <Header text={"PROJECT"} />
                    <div className='py-3 px-44 h-2/3 font-sand'>

                    </div>
                </section>
            </div>
        </>
    )
}