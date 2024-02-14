import "./index.scss";
import appLogo from "../../assets/logo-light.png";
export default function LoginPage() {
  return (
    <div className="col-12" id="LoginPage">
      <div className="content">
        <div className="col-12 col-md-7" id="imageSection">
          <div className="filter">
            <div className="col-12">
              <img src={appLogo} />
            </div>
            <div className="col-12" id="mainContent">
              <h1 className="col-12">Welcome back !</h1>
              <p className="col-12">
                Get access to your Orders, Wishlist and Recommendations.
              </p>
              <div className="col-4">
                <p>Watch demo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5" id="formSection">
          <form className="col-11">
            <h1 className="col-12">Sign In</h1>
            <div className="col-12 inputField">
              <label className="col-12">Email Address</label>
              <input
                className="col-12"
                type="email"
                placeholder="Enter Email"
                required
              />
              <span className="col-12 alert alert-danger">
                Error will be here
              </span>
            </div>
            <div className="col-12 inputField">
              <label className="col-12">Password</label>
              <input
                className="col-12"
                type="password"
                placeholder="Enter Password"
                required
              />
              <span className="col-12 alert alert-danger">
                Error will be here
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
