import React from 'react'
import Banner from '../Comp/Banner'

import Last from '../Comp/Last'
import Productbycat from '../Comp/Productbycat'
function Home() {
    return (
        <>
            <div>
                <Banner />
            </div>
            <Productbycat aa="laptops"/>
            <Productbycat aa="smartphones"/>
            <Productbycat aa="automotive"/>
            <div>
              <Last/>  
            </div>
 
        </>
    )
}

export default Home
