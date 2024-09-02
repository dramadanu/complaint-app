// import React from 'react'

import bantuanImage1 from '../assets/bantuan-1.png'
import bantuanImage2 from '../assets/bantuan-2.png'
import bantuanImage3 from '../assets/bantuan-3.png'

const BantuanPage = () => {
  return (
    <>
    <section className="hero-2">
        <div className="title-container-2">
          <h1>Bantuan</h1>
        </div>
    </section>

    <section className='bantuan'>
        <div className="content-image">
            <img src={bantuanImage1} alt="bantuan 1" />
        </div>
        <div className="content-image">
            <img src={bantuanImage2} alt="bantuan 2" />
        </div>
        <div className="content-image">
            <img src={bantuanImage3} alt="bantuan 3" />
        </div>
    </section>
    </>
  )
}

export default BantuanPage