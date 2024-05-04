import React from 'react'

function Courses() {
    return (
        <>
            <h1 className='text-center font-bold text-3xl my-4 p-4'> College Courses</h1>
            <div className='flex flex-row flex-wrap gap-6 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/dsa.png" alt="DSA" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Data Structures and Algorithms</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/oops.png" alt="OOPS" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Object Oriented Programming and Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/dbms.png" alt="DBMS" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Database Management Systems</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Computer Networks</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Operating System</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Computer System Organisation</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Programming Labs(C/C++, Java, Python)</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Compiler Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 shadow-xl image-full rounded  dark:border-neutral-700 dark:bg-neutral-800">
                    <div className="card-body bg-neutral-600">
                        <h2 className="card-title"><img src="/ai.png" width={50} height={50} alt="" />Artificial Intelligence and Machine Learning</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Data Science</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses