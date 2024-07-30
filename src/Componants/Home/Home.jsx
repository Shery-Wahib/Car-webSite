import React from 'react'
import Header from './HomeComponants/Header/Header'
import Populer from './HomeComponants/Populer/Populer'
import HowItWork from './HomeComponants/HowItWork/HowItWork'
import WhyChooseUs from './HomeComponants/WhyChooseUs/WhyChooseUs'
import WhatPeopleSay from './HomeComponants/WhatPeopleSay/WhatPeopleSay'
import DownloadApp from './HomeComponants/DownloadApp/DownloadApp'
import Footer from './HomeComponants/Footer/Footer'



export default function Home() {

    return (
        <>
            <Header />
            <Populer />
            <HowItWork />
            <WhyChooseUs />
            <WhatPeopleSay />
            <DownloadApp />
            <Footer />
        </>
    )
}
