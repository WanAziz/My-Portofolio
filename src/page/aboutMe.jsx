import Sidebar from '../comp/sideBar'
import Header from '../comp/header'

export default function () {

    return (
        <div className='flex'>
            <Sidebar />
            <section className='w-4/5 bg-gray-200'>
                <Header text={"ABOUT ME"}/>
                <div className='py-3 px-44 h-2/3 font-sand'>
                    <h1 className='text-4xl mb-2'>I'm <strong className='font-hans'>Wan Aziz,</strong> Play Hard Work Hard</h1>
                    <p className='mb-6 text-lg'>Saya merupakan mahasiswa sistem informasi dengan kegigihan untuk terus berkembang sesuai
                        perkembangan teknologi dengan harapan untuk menciptakan sistem yang cepat dan efisien.
                        Selain itu saya memiliki cara berkomunikasi yang baik dan kemampuan berfikir keritis dalam
                        menyelesaikan masalah.
                    </p>
                    <div className='flex h-96 '>
                        <div className='w-2/3 grid grid-rows-2 grid-flow-col bg-gray-400 text-white text-5xl font-hans'>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>NGEGAME</div>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>NGODING</div>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>SEPAK BOLA</div>
                            <div className='border border-1 border-white flex justify-center items-center hover:bg-gray-800 duration-300'>BUKUTANGKIS</div>
                        </div>
                        <div className='w-1/3 text-4xl'>
                            <div className='flex items-center h-1/3 pl-6'>
                                <i className="fi px-3 fi-rr-users-alt"></i>
                                <h1>Team Work</h1>
                            </div>
                            <div className='flex items-center h-1/3 pl-6'>
                                <i className="fi px-3 fi-rr-comment-question"></i>
                                <h1>Problem Solving </h1>
                            </div>
                            <div className='flex items-center h-1/3 pl-6'>
                                <i className="fi px-3 fi-rr-calendar-clock"></i>
                                <h1>Objective </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}