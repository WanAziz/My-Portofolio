import NavbarComp from "../comp/navComp"

export default function () {
  return (
    <div className="w-full h-screen flex">
      <div className='w-1/2 h-screen flex flex-col justify-center bg-white shadow-2xl shadow-gray-500 y z-10'>
        <div className='mx-36 font-sand'>
          <h1 className='text-4xl '>HELLO THERE <strong>!</strong> </h1>
          <h1 className='font-hans text-8xl py-3 font-bold'>I'M <span className='text-yellow-300'>WAN</span></h1>
          <hr className='border-t-4 border-yellow-300 py-3' />
          <p className='text-base font-sand'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quae fuga repudiandae, magni odio, molestiae eligendi debitis pariatur dicta vel ex impedit vero rerum doloremque? Ea neque eaque quasi dolores!
          </p>
          <NavbarComp mt={6}/>
        </div>
      </div>
      <div className='w-1/2 bg-gray-200 '>
        <img className='h-full  object-cover' src="./img/user.png" alt="" />
      </div>
    </div>
  );
}