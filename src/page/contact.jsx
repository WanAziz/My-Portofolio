import Sidebar from '../comp/sideBar'
import Header from '../comp/header'
import { Button } from 'flowbite-react';

export default function () {

    return (
        <div className='flex font-sand'>
            <Sidebar />
            <section className='w-4/5 bg-gray-200'>
                <Header text={"CONTACT"} />
                <div className='py-3 px-44 h-3/5 font-sand flex justify-center'>
                    <div className='w-full px-16 mx-1 py-16 flex flex-col items-center border-2 border-gray-300 rounded-xl hover:bg-gray-300 duration-300 shadow-lg shadow-gray-300'>
                        <img className='h-56 pb-12 object-contain' src="img/i-gmail.png" alt="" />
                        <h1 className='text-4xl mb-1 font-hans'>GMAIL</h1>
                        <a href=""></a>
                        <h5 className='text-lg hover:underline cursor-default'>wanazizakaria28@gmail.com</h5>
                    </div>
                    <div className='w-full px-16 mx-1 py-16 flex flex-col items-center border-2 border-gray-300 rounded-xl hover:bg-gray-300 duration-300 shadow-lg shadow-gray-300'>
                        <img className='h-56 pb-12 object-contain' src="img/i-github.png" alt="" />
                        <h1 className='text-4xl mb-1 font-hans'>GITHUB</h1>
                        <a className='text-lg hover:underline no-underline cursor-default' href="https://github.com/WanAziz"  target="_blank">WanAziz</a>
                    </div>
                    <div className='w-full px-16 mx-1 py-16 flex flex-col items-center border-2 border-gray-300 rounded-xl hover:bg-gray-300 duration-300 shadow-lg shadow-gray-300'>
                        <img className='h-56 pb-12 object-contain' src="img/i-wa.png" alt="" />
                        <h1 className='text-4xl mb-1 font-hans'>WA</h1>
                        <a className='text-lg hover:underline no-underline cursor-default' href="https://wa.me/62895424465906"  target="_blank">0895424465906</a>
                    </div>
                </div>
            </section>
        </div>
    )
}