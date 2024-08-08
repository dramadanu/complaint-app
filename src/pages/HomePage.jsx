// rafce


import heroImage from '../assets/hero-image.jpg';
import whiteTelkomsel from '../assets/telkomsel-white.png';
import sectionImage from '../assets/model-image.jpg';
// import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    
//   let navigate = useNavigate();

    return (
        <>
            <section className="hero">
                <div className="title-container">
                    <p>Selamat datang di pusat pengaduan <br/> keluhan jaringan pelanggan</p>
                    <img className="telkomsel-white" src={whiteTelkomsel} alt="telkomsel-white" />
                        <div className="button">
                            <button className='btn-color-1'>Buat Laporan</button>
                            <button className='btn-color-2'>Sign In</button>
                        </div>
                </div>
                <div className="image-container">
                    <img className="hero-image" src={heroImage} alt="hero image" />
                </div>
            </section>

            <section className="instruction">
                <h1>Apa yang harus anda lakukan?</h1>
                <div className="section-container"> 
                    <div className="section-picture">
                        <img className="section-image" src={sectionImage} alt="section image" />
                    </div>
                    <div className="section-text">
                        <h2>
                            Apa yang harus dilakukan ketika mengalami masalah jaringan seluler?
                        </h2>
                        <ul className="list">
                            <li><p>Pertama, pastikan kuota internet anda masih tersedia.</p></li>
                            <li><p>Lakukan restart pada perangkan seluler anda, apakah masih mengalami permasalahan jaringan.</p></li>
                            <li><p>Cek koneksi dan kualitas jaringan pada lokasi anda saat ini. Bisa dilakukan melalui cara <span>di bawah</span> ini.</p></li>
                            <li><p>Jika hasil dari tes kualitas jaringan di lokasi anda berada di kondisi yang kurang baik, anda dapat membuat laporan pengaduan mengenai permasalahan jaringan melalui <span>laman berikut.</span></p></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="network-test">
                <h1>Cek kualitas jaringan lokasi anda</h1>
                <div className="section-container-test">
                    <div className="section-container-map">
                        <h2>Lokasi Anda</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.3309025634803!2d110.04500375642235!3d-7.087585769216714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706fd0e3e4afb3%3A0xb9f394ede4be125!2sAlun%20Alun%20Bunderan%20Sukorejo!5e0!3m2!1sid!2sid!4v1723000870026!5m2!1sid!2sid" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>                
                    </div>
                    <div className="section-result">
                        <h2>Tes Jaringan</h2>
                        <div className="test-title">
                            <h2>STATUS</h2>
                            <div className="status">Online</div>
                        </div>
                        <div className="test-result">
                            <ul>
                                <li><p>Download Speed</p></li>
                                <li><p>Upload Speed</p></li>
                                <li><p>RSRP</p></li>
                                <li><p>RSRQ</p></li>
                                <li><p>SNR</p></li>
                                <li><p>CQI</p></li> 
                            </ul>
                            <ul className="signal">
                                <li><p>100</p></li>
                                <li><p>100</p></li>
                                <li><p>100</p></li>
                                <li><p>100</p></li>
                                <li><p>100</p></li>
                                <li><p>100</p></li>
                            </ul>
                        </div>
                        <div className="button">
                            <button>Cek Jaringan</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="button-check">
            <div className="btn-button-check">
                <button>Buat laporan keluhan</button>
            </div></section>
        </>
    )
}

export default HomePage;