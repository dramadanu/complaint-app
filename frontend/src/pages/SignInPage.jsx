// import React from 'react'
import { Link } from 'react-router-dom';
import logoTsel from '../assets/logo.png';

const SignInPage = () => {
  return (
    <>
        <div className="login-container">
            <img src={logoTsel} alt="logo Telkomsel" />
            <h4>Silahkan login untuk membuat laporan</h4>
            <div className="form">
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <input type="text" name="email" id="email" placeholder="EMAIL OR PHONE" required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="PASSWORD" required />
                    </div>
                    <div className="form-group-btn">
                        <button className="btn">Sign In</button>
                    </div>
                    <h3>Or</h3>
                    <div className="form-group">
                        <button className="btn">SIGN IN WITH GOOGLE</button>
                    </div>
                    <div className="form-group">
                        <button className="btn">SIGN IN WITH PHONE</button>
                    </div>
                    <div className="form-group">
                        <Link to="/create" className="create">Create Account!</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignInPage