import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P, H6, Image } from "../AbstractElements";
import { Link } from 'react-router-dom';
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn } from "../Constant";

import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";

import CustomizerContext from "../_helper/Customizer";
// import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";

import logoWhite from "../assets/images/logo/logo.png";
import logoDark from "../assets/images/logo/logo_dark.png";

const Signin = ({ selected }) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName("Emay Walter");
    if (email === "test@gmail.com" && password === "test123") {
      localStorage.setItem("login", JSON.stringify(true));
      history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
      toast.success("Successfully logged in!..");
    } else {
      toast.error("You enter wrong password or username!..");
    }
  };

  return (
    <Fragment>
      <div className='login-card'>
        <div>
          <div>
            <Link className={`logo text-center`} to={process.env.PUBLIC_URL}>
              <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'looginpage' }} />
              <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'looginpage' }} />
            </Link>
          </div>

          <div className='login-main'>
            <Form className='theme-form login-form'>
              <H4>Sign in to account</H4>
              <P>Enter your email & password to login</P>
              <FormGroup>
                <Label className='col-form-label m-0'>{EmailAddress}</Label>
                <Input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </FormGroup>
              <FormGroup className='position-relative'>
                <Label className='col-form-label m-0'>{Password}</Label>
                <div className='position-relative'>
                  <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} />
                  <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                    <span className={togglePassword ? '' : 'show'}></span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className='position-relative'>
                <div className='checkbox'>
                  <Input id='checkbox1' type='checkbox' />
                  <Label className='text-muted' for='checkbox1'>
                    Remember password
                  </Label>
                </div>
              </FormGroup>
              <FormGroup>
                <Btn attrBtn={{ className: 'd-block w-100 mt-2', color: 'primary', type: 'submit' }}>{SignIn}</Btn>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
};

export default Signin;
