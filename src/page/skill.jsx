import Sidebar from '../comp/sideBar'
import Header from '../comp/header'

export default function () {

    return (
        <div className='flex'>
            <Sidebar />
            <section className='w-4/5 bg-gray-200'>
                <Header text={"SKILL"} />
                <div className='flex py-3 px-44 h-3/5 '>
                    <div className='w-full gap-4 grid grid-rows-2 grid-flow-col text-white text-5xl font-hans'>
                        <div className='w-96 rounded shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-40 mb-6 object-contain' src="img/i-html.png" alt="" />
                            <h1 className='text-3xl'>HTML CSS JS</h1>
                        </div>
                        <div className='w-96 rounded shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-40 mb-6 object-contain' src="img/i-sql.png" alt="" />
                            <h1 className='text-3xl'>SQL</h1>
                        </div>
                        <div className='w-96 rounded shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-40 mb-6 object-contain' src="img/i-react.png" alt="" />
                            <h1 className='text-3xl'>React.js</h1>
                        </div>
                        <div className='w-96 rounded shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-40 mb-6 object-contain' src="img/i-java.png" alt="" />
                            <h1 className='text-3xl'>Java</h1>
                        </div>
                        <div className='w-96 rounded shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-40 mb-6 object-contain' src="img/i-node.png" alt="" />
                            <h1 className='text-3xl'>Node.js</h1>
                        </div>
                        <div className='w-96 rounded shadow-md shadow-gray-400 flex flex-col justify-center items-center bg-gray-300 hover:bg-gray-800 duration-300'>
                            <img className='h-40 mb-6 object-contain' src="img/i-lua.png" alt="" />
                            <h1 className='text-3xl'>Lua</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}