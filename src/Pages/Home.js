import React, { useState } from 'react'

import Banner from '../component/Banner/Banner'
import NextBanner from '../component/NextBanner/NextBanner'
import ThirdBanner from '../component/ThirdBanner/ThirdBanner'
import FourthBanner from '../component/FourthBanner/FourthBanner'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../component/Footer/Footer'
import ContactModal from '../ContactModal'
function Home() {
    const[modal,setModal] =useState(false)
    return(
    <>
    {modal &&<ContactModal setModal={setModal} />}
    <Banner setModal={setModal}/>
    <NextBanner />
    <ThirdBanner />
    <FourthBanner />
    <Testimonial />
    <Footer />
    </>
)

}

export default Home
