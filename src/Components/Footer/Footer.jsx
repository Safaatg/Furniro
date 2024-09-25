import "../Footer/Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footerWrapper">
            <div className="footerculom">
                <h2 className="logo">Funiro.</h2>
                <p>400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>

            <ul className="footerculom">
                <li className="foot">Links</li>
                <li className="">Home</li>
                <li className="">Shop</li>
                <li className="">About</li>
                <li className="">Contact</li>

            </ul>

            <ul className="footerculom">
                <li className="foot">Help</li>
                <li className="">Payment Options</li>
                <li className="">Returns</li>
                <li className="">Privacy Policies</li>
            </ul>
            
            <div className="footerculom ">
                <h2 className="foot">Newsletter</h2>
                <div className="Newsletter">
                    <input className="NewsletterEmail" type="email" placeholder="Enter Your Email Address"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            </div>
            <div className="copywrite">
                <hr />
                <p>2023 furino. All rights reverved</p>
            </div>
        </div>
    );
}

export default Footer;
