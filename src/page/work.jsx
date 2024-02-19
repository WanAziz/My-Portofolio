import Sidebar from '../comp/sideBar'
import Header from '../comp/header'

export default function () {

    return (
        <div className='flex font-sand'>
            <Sidebar />
            <section className='w-4/5 bg-gray-200'>
                <Header text={"EXPERIENCE"} />
                <div className='flex flex-col py-3 px-44 h-3/5'>
                    <div className='mb-9'>
                        <h1 className='text-3xl font-hans'>PENDIDIKAN</h1>
                        <hr className='border border-2 my-2 border-yellow-300' />
                        <div className='flex justify-between text-xl'>
                            <h5>Sistem Informasi | Universitas Terbuka</h5>
                            <h5>2020 - Sekarang</h5>
                        </div>
                        <li className='text-xl marker:text-yellow-300'> IPK : 3.51</li>
                    </div>
                    <h1 className='text-3xl font-hans'>PENGALAMAN</h1>
                    <hr className='border border-2 my-2 border-yellow-300' />
                    <div className='flex'>
                        <div className='w-1/2'>
                            <div className='flex justify-between text-xl mb-2'>
                                <h5>Operator Mesin CNC Laser | PT Dua Kelinci</h5>
                                <h5>2021 - Now</h5>
                            </div>
                            <li className="my-1 marker:text-yellow-300">Menangani pengoperasian mesin CNC Laser untuk memotong berbagai bahan sesuai dengan
                                spesifikasi desain.</li>
                            <li className="my-1 marker:text-yellow-300">Mampu membaca dan memahami gambar teknis serta merancang program CNC untuk
                                memastikan hasil produksi yang akurat.</li>
                            <li className="my-1 marker:text-yellow-300">Memahami gambar kerja dan instruksi kerja dengan cermat untuk memastikan hasil produksi
                                sesuai dengan toleransi yang ditentukan.</li>
                            <li className="my-1 marker:text-yellow-300">Mengkalibrasi dan mengatur mesin dengan presisi untuk mencapai kualitas produk yang
                                optimal.</li>
                            <li className="my-1 marker:text-yellow-300">Bertanggung jawab terhadap pemeliharaan rutin mesin untuk memastikan kinerja yang optimal.</li>
                        </div>
                        <div className='h-full flex items-center px-6'>
                            <hr className='border border-yellow-300 h-52' />
                        </div>
                        <div className='w-1/2'>
                            <div className='flex justify-between text-xl mb-2'>
                                <h5>Kejuruan Operator Computer | UPTD BLK Pati</h5>
                                <h5>2020</h5>
                            </div>
                            <li className="my-1 marker:text-yellow-300">Mengikuti pelatihan intensif dalam penggunaan Microsoft Office, termasuk Word, Excel, dan PowerPoint.</li>
                            <li className="my-1 marker:text-yellow-300">Menguasai fitur dan teknik esensial untuk merancang dokumen profesional, menganalisis data, dan membuat presentasi dinamis.</li>
                            <li className="my-1 marker:text-yellow-300">Kemampuan untuk berkontribusi secara maksimal dalam tugas administratif dan analisis data menggunakan Microsoft Office.Pendidikan</li>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



