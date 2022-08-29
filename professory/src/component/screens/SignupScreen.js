import React from 'react'
import BecomeMember from "../../Assets/img/signupDivImg1.png";
// import "react-phone-input-2/lib/style.css";
// import PhoneInput from 'react-phone-input-2'

const SignupScreen = () => {
  return (
   <>
     <div className="container-fluid SignUp my-5 BackgroundImg">
        <div className="row py-5">
          <div className="MaxWidth pb-5">
            <div className="col-12 col-md-8 px-0 mx-auto divShadow">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 bgBlue">
                  <div className="h-100 d-flex">
                    <div className="my-auto mx-auto d-block">
                      <div className="p-3">
                        <img
                          src={BecomeMember}
                          className="mx-auto d-block w-25"
                          alt="Become a member"
                        />
                        <p className="text-center text-white FS_20 Bold my-3">
                          Become a Member Now
                        </p>
                        <p className="text-center text-white FS_14">
                          What is Lorem Ipsum Lorem text of the printing and type
                          has been the industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-8 col-lg-6 bg-white">
                <form className=" my-5" >
                <h3 className="p-4 text-center" style={{ color: "rgb(38, 38, 38)" }}>Sign Up</h3>
                <div className="form-group">
                      <input
                        type="text"
                        className="form-control mx-auto"
                        name="full_name"
                        required
                        value=""
                        placeholder="Full Name"
                        onChange=""
                      />
                      <label htmlFor="full_name">Full Name</label>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mx-auto"
                        name="full_name"
                        required
                        value=""
                        placeholder="Full Name"
                        onChange=""
                      />
                      <label htmlFor="full_name">Full Name</label>
                    </div>
                    {/* <PhoneInput
                      value={this.state.phone}
                      placeholder="Enter phone"
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      containerClass="mb-3"
                      country={"kw"}
                      // onChange={phone => this.setState({ phone })}
                    //   onChange={this.updatePhone}
                      isValid={(inputNumber, value, country) => {
                        const newStr = inputNumber.replace(
                          value.dialCode,
                          ""
                        );
                        if (value.dialCode === "") {
                          return "Select Country Code";
                        } else if (newStr === "" && this.state.count) {
                          return "Phone number required";
                        } else {
                          return true;
                        }
                      }}
                    /> */}

                
                </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default SignupScreen