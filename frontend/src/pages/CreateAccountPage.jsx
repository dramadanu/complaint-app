

import logoTsel from '../assets/logo.png'

const CreateAccountPage = () => {
  return (
    <>
        <div className="login-container">
            <img src={logoTsel} alt="logo Telkomsel" />
            <h4>Silahkan buat akun untuk dapat login</h4>
            <div className="form-create">
                <form>
                    <h3>Create Account</h3>
                    <div className="form-group">
                        <input type="text" name="email" id="email" placeholder="EMAIL" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="FULL NAME" required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="PASSWORD" required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="CONFIRM PASSWORD" required />
                    </div>
                    <div className="form-group-btn">
                        <button className="btn">CREATE ACCOUNT</button>
                    </div>
                    <div className="check-policy">
                        <div className="form-group-policy">
                            <input type="checkbox" name="policy" value="policy" id="privacy_policy" required />
                            <label htmlFor="privacy_policy">Privacy Policy</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreateAccountPage