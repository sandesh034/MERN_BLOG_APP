import React from 'react'
import { FaFacebook,FaInstagram,FaViber,FaDiscord,FaTelegram } from 'react-icons/fa6'


const Footer = () => {
    return (
        <>
            <section class="footer-container">
                <div class="footer-about-column">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt maxime est aperiam eaque dicta
                        consequuntur maiores temporibus quod tempora corrupti!</p>
                </div>
                <div class="footer-links-column">
                    <h3>Links</h3>
                    <ul>
                        <li class="footer-links-item"><a href="">Home</a></li>
                        <li class="footer-links-item"><a href="">About</a></li>
                        <li class="footer-links-item"><a href="">Education</a></li>
                        <li class="footer-links-item"><a href="">Services</a></li>
                        <li class="footer-links-item"><a href="">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-social-media-column">
                    <h3>Connect</h3>
                    <ul>
                        <li class="footer-links-item"><a href=""><FaFacebook/></a></li>
                        <li class="footer-links-item"><a href=""><FaInstagram/></a></li>
                        <li class="footer-links-item"><a href=""><FaViber/></a></li>
                        <li class="footer-links-item"><a href=""><FaDiscord/></a></li>
                        <li class="footer-links-item"><a href=""><FaTelegram/></a></li>
                    </ul>

                </div>
            </section>
        </>
    )
}

export default Footer