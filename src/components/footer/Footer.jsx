import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <Image width={200} height={100} src={logo} alt="logo" />
                    <div className="footer__top">
                        <ul className="footer__list">
                            <h3>About us</h3>
                            <li className="footer__item">
                                <Link href={"#"}>Direction</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>Command</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>Tools</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>Clients</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <h3>Services</h3>
                            <li className="footer__item">
                                <Link href={"#"}>
                                    Development of mobile applications
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>
                                    Development and implementation ERP systems
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>
                                    User interface, User experience design IT
                                    consulting
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>
                                    Optimization IT consulting infrastructure
                                </Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <h3>Services</h3>
                            <li className="footer__item">
                                <Link href={"#"}>Delever</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>Sms.uz</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>Goodzone</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#"}>Iman</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bot">
                        <p>© 2024 Udevs. All rights reserved</p>
                        <div className="footer__bot__icon">
                            <FaYoutube /> <FaInstagram /> <FaFacebook />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
