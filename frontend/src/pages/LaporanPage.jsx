// import React from 'react'

import footerImage from '../assets/footer.png'

const LaporanPage = () => {
  return (
    <>
      <section className="hero-2">
          <div className="title-container-2">
            <h1>Laporan &gt;&gt;</h1>
          </div>
      </section>

      <section className="layanan-form">
        <div className="complaint-form">
          <form action="">
            <h3>Tulis Detail Laporan</h3>
            <div className="group-form-1">
              <input type="text" name="email" id="email" placeholder="EMAIL" required />
              <input type="text" name="name" id="name" placeholder="NAMA" required />
              <input type="text" name="nomor" id="nomor" placeholder="NO. HP" required />
            </div>
            <div className="isi-laporan">
              <textarea type="text" name="keluhan" id="keluhan" placeholder="DETAIL KELUHAN" required />
            </div>
          </form>
        </div>
      </section>

      <section className="footer-page">
        <div className="footer-1">
          <img src={footerImage} alt="footer section" />
        </div>
      </section>
    </>
  )
}

export default LaporanPage