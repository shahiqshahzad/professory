import React, { useEffect, useState } from 'react'
import GooglePlay from '../../Assets/img/GooglePlay.png'
import Google from '../../Assets/img/google.png'
import Twitter from '../../Assets/img/Twitter.png'
import AppStore from '../../Assets/img/AppStore.png'
import MobileImg from '../../Assets/img/MobileImg.png'
import axios from 'axios'
import { useNavigate ,NavLink} from 'react-router-dom'
import Message from '../Message'
import Slider from '../Slider'
const LoginScreen = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('')
    const navigate = useNavigate()

    const userInfoFromStorage = localStorage.getItem('userLogin')?JSON.parse(localStorage.getItem('userLogin')):null
    const loginSubmitHandler = async(e) =>{
        e.preventDefault()
      const data =   await axios.post('https://professoryapp.com:5000/api/user/login',{
            email,
            password,
            ProviderType:"website",
            fCMToken:"check token"

        })
            if(data.data.success){
                console.log()
                const saveToken = data.data.data.user
                navigate('/home')
                localStorage.setItem('userLogin',JSON.stringify(saveToken))
            }else{
                setError(data.data.message)
            }
    }

    useEffect(() =>{
        if(userInfoFromStorage){
            navigate('/home')
        }
    },[navigate,userInfoFromStorage])
  return (
    <>
    <div className="container-fluid upper_div py-5">
    <div className="MaxWidth">
        <div className="mb-5">
            <div className="row">
                <div className="row col-11 col-md-10 mx-auto mb-2">
                    <div className="col-12 col-md-5 Para py-5 px-0 my-md-auto d-block">
                        <div className="d-block mr-auto" style={{ maxWidth: "500px" }}>
                            <p className="FS_55 Bold mb-3">Professory App</p>
                            <p className="FS_20" >What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            <img src={GooglePlay} alt="Play Store" id="img1" loading="Lazy" />
                            <img src={AppStore} className="ml-2" alt="App Store" id="img2" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ml-auto px-0 px-md-3">

                        <div className="loginForm">
                            <form className=" form px-4 px-md-5 py-3 mb-0 mt-5" style={{ maxWidth: "600px" }} id="inputForm">
                                <p className="py-4 FS_24 mb-0 text-center" style={{ color: "#9C9C9C" }}>Log in</p>
                            {error && <Message>{error}</Message>}

                                <div className="form-group">
                                    <input
                                        type="text"
                                        autoFocus
                                        id="phone"
                                        className="form-control mx-auto"
                                        placeholder="Phone Number, Username, or Email"
                                        value={email}
                                        name="email"
                                        // autoComplete={false}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="phone" >Phone, Username, or Email</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control mx-auto"
                                        placeholder="Password"
                                        // value={this.state.password}
                                        name="password"
                                        // autoComplete={false}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-group">
                                    <button
                                        onClick={loginSubmitHandler}
                                        type="button"
                                        className="btn w-100 py-2 FS_14 mx-auto button filled_btn">
                                        Log In
                                    </button>
                                </div>
                                <div className="form-group my-3">
                                    <div className="strike mx-auto">
                                        <h6><span className="px-2">OR</span></h6>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row mx-auto a">
                                        <div className="col-6 pl-0 pr-1 mb-3">
                                            <div className="mr-auto bordr">
                                                <div className="row text-center mx-auto p-2">
                                                    <div className="col-12 col-md-3 p-0 my-auto">
                                                        <img
                                                            className="pr-0"
                                                            src={Google}
                                                            alt="Google"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-9 p-0 my-auto">
                                                        <h6 className="FS_11 LightGray mb-0">
                                                            Login with Google
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 pr-0 pl-1 mb-3">
                                            <div className="mr-auto bordr">
                                                <div className="row text-center mx-auto p-2">
                                                    <div className="col-12 col-md-3 p-0 my-auto">
                                                        <img
                                                            className="pr-0 py-1"
                                                            src={Twitter}
                                                            alt="Twitter"
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-9 p-0 my-auto">
                                                        <h6 className="FS_11 LightGray mb-0">
                                                            Login with Twitter
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto">
                                            <p
                                                className="mb-0"
                                                style={{ color: "#3679BC" }}
                                            >
                                                Forget Password?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div
                                className="LoginFooter p-3"
                            >
                                <p className="mb-0 FS_15" style={{ color: "white" }}>
                                    Don't have a account?{" "}
                                    <NavLink to="/SignUp">
                                        <strong style={{ color: "white" }}>SignUp</strong>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</div>
<div className="container-fluid pb-5 mb-12">
                    <div className="row">
                        <div className="col-11 mx-auto" id="Feature">
                            <div className="container">
                                <div className="row col-11 mx-auto px-0">
                                    <div className="Right_to_center d-flex justify-content-end">
                                        <p className="FS_30 Bold themeTxt mb-0 mt-5">Our Features</p>
                                    </div>
                                    <Slider />
                                    <div className="col-6" style={{position:"absolute" , zIndex:1}}>
                                <img src={MobileImg} className="MobileImg" id="Android" alt="Android Display" />
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</>
  )
}

export default LoginScreen