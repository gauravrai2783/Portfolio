import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='Ryde' />
                        </div>
                        <div className='text-content'>
                            <h2>Where Tradtion Meet Luxury Rugs & Carpet E-Commerce 
                                called Weavers Rug
                            </h2>
                            <p className='text-white-50 md:text-xl'>
                                a full stackE commerce website functional with payment gateway
                                and bot chat enable with user friendly experience.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Youtube' />
                            </div>
                            <h2>Full Functional Youtube Clone</h2>

                        </div>

                    </div>

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Youtube' />
                            </div>
                            <h2>Full Functional Youtube Clone</h2>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection