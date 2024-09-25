import Header from "../Components/Header/Header";
import Categories from "../Components/Categories/Categories";
import Feature from "../Components/Feature/Feature";
import Footer from "../Components/Footer/Footer";
import "../Pages/Home.css"

import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';



const Home = () => {
    const props = useSpring({ 
        from: { marginLeft: -500 }, 
        to: { marginLeft: 0 },
        config: { duration: 1000 } 
    });

    useEffect(() => {
        document.body.classList.add('animated-page');
        return () => {
            document.body.classList.remove('animated-page');
        };
    }, []);

    return (
        <animated.div style={props}>
            <div>
                <Header />
                <Categories />
                <Feature />
                <Footer />
            </div>
        </animated.div>
    );
};

export default Home;