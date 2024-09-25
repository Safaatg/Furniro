import "../Feature/Feature.css"
import trophy from "../../../public/assets/trophy 1.png"
import guarantee from "../../../public/assets/guarantee.png"
import shipping from "../../../public/assets/shipping.png"
import customer from "../../../public/assets/customer-support.png"
const Feature = () => {
    return (
        <div className="Feature">
            <div className="FeatureFrame">
                <img src={trophy} />
                <div className="FeatureText">
                    <h3>High Quality</h3>
                    <p>crafted from top materials</p>
                </div>
            </div>

            <div className="FeatureFrame">
                <img src={guarantee} />
                <div className="FeatureText">
                    <h3>Warranty Protection</h3>
                    <p>Over 2 years</p>
                </div>
            </div>

            <div className="FeatureFrame">
                <img src={shipping} />
                <div className="FeatureText">
                    <h3>Free Shipping</h3>
                    <p>Order over 150 $</p>
                </div>
            </div>

            <div className="FeatureFrame">
                <img src={customer} />
                <div className="FeatureText">
                    <h3>24 / 7 Support</h3>
                    <p>Dedicated support</p>
                </div>
            </div>

            
        </div>
    );
}

export default Feature;
