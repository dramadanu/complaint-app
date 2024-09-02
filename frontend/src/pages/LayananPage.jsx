import sectionImage from '../assets/model-image-2.png'
import contentImage1 from '../assets/content-1.png'
import contentImage2 from '../assets/content-2.png'

const LayananPage = () => {
  return (
    <>
      <section className="hero-2">
          <div className="title-container-2">
            <h1>Value Added Services</h1>
          </div>
      </section>

      <section className="layanan-section">
          <div className="section-container"> 
              <div className="section-picture-2">
                  <img className="section-image" src={sectionImage} alt="section image" />
              </div>
              <div className="section-text-2">
                  <h1>
                      Lakukan lebih banyak dengan ponselmu
                  </h1>
                  <ul className="list">
                      <p>Nikmati layanan tambahan terbaik dari Telkomsel dan jadikan ponsel Anda lebih dari sekedar ponsel biasa.</p>
                  </ul>
                  <div className="button">
                    <button>Cek Layanan</button>
                  </div>
               </div>
          </div>
      </section>

      <section className='content'>
        <div className="content-image">
          <img src={contentImage1} alt="content-1" />
        </div>
        <div className="content-image">
          <img src={contentImage2} alt="content-2" />
        </div>
      </section>

      <section className="button-check">
        <div className="btn-button-check-2">
          <button>Selengkapnya</button>
        </div>
      </section>
    </>
  )
}

export default LayananPage;