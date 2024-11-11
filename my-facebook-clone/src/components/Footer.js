import React from "react";
import './Footer.css';

function Footer(){
    return (
        <div className="footer">
        <div className="footer-languages">
        <a href="#">English (UK)</a>
        <a href="#">हिन्दी</a>
        <a href="#">ಕನ್ನಡ</a>
        <a href="#">தமிழ்</a>
        <a href="#">తెలుగు</a>
        <a href="#">മലയാളം</a>
        <a href="#">Español</a>
        <a href="#">Português (Brasil)</a>
        <a href="#">Français (France)</a>
        <a href="#">Deutsch</a>
        <a href="#">Italiano</a>
        <a href="#">اردو</a>
        <a href="#">More...</a>
        </div>
        <div className="footer-links">
        <a href="#">Sign Up</a>
        <a href="#">Log In</a>
        <a href="#">Messenger</a>
        <a href="#">Facebook Lite</a>
        <a href="#">Watch</a>
        <a href="#">Places</a>
        <a href="#">Games</a>
        <a href="#">Marketplace</a>
        <a href="#">Meta Pay</a>
        <a href="#">Oculus</a>
        <a href="#">Portal</a>
        <a href="#">Instagram</a>
        <a href="#">Bulletin</a>
        <a href="#">Local</a>
        <a href="#">Fundraisers</a>
        <a href="#">Services</a>
        <a href="#">Voting Information Centre</a>
        <a href="#">Groups</a>
        <a href="#">About</a>
        <a href="#">Create Ad</a>
        <a href="#">Create Page</a>
        <a href="#">Developers</a>
        <a href="#">Careers</a>
        <a href="#">Privacy</a>
        <a href="#">Cookies</a>
        <a href="#">AdChoices</a>
        <a href="#">Terms</a>
        <a href="#">Help</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">Settings</a>
        <a href="#">Activity Log</a>
        </div>
        <div className="footer-copyright">
            <p>
                Meta © {new Date().getFullYear()}
            </p>
        </div>
    </div>
    );
}

export default Footer;