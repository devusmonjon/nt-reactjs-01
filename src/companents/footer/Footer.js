import React from "react";
import "./footer.css"
import footerfoto from "../../assetes/Screenshot_3 [Recovered] 1.png"
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
function Footer (){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__box">
                        <div className="foter__logo">
                            <img src={footerfoto} alt="" />
                        </div>
                        <p className="footer__p">But i must explain to you all this mistaken
                        idea of dencouncing pleasure.</p>
                    </div>
                    <ul className="footer__collection no">
                        <li className="footer_title">Quick Links</li>
                        <li className="footer__item">
                            <a href="#">About Our Company</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Services WE provide</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Career & Opportunity</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Privacy & policy</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Contact US</a>
                        </li>
                    </ul>
                    <ul className="footer__collection mobile">
                    <li className="footer_title">Company</li>
                        <li className="footer__item">
                            <a href="#">About Company</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Our Testimonials</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Latest News</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Our misson</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Get a free Quot</a>
                        </li>
                    </ul>
                    <ul className="footer__collection mobile">
                        <li className="footer_title">Contact Us</li>
                        <li className="footer__item">
                            <a href="#">Sagrada Familia, Herba</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">Street Front USA</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">brandoxide@gmail.com</a>
                        </li>
                        <li className="footer__item">
                            <a href="#">002-568423591</a>
                        </li>
                    </ul>
                    <ul className="footer__collection">
                        <li className="footer_title">Follow Us</li>
                        <ul className="footer__icons">
                            <a href="#">
                                <FaFacebook />
                            </a>
                            <a href="#">
                                <AiFillLinkedin />
                            </a>
                            <a href="#">
                                <IoLogoInstagram />
                            </a>
                            <a href="#">
                                <FaTelegram />
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
                <p className="copyright">
                Copyright @ 2020 <a href="#">Brandoxide</a>.all right reserved.
                </p>
        </div>
    )
}
export default Footer