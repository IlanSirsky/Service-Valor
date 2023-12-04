import React from "react";
import { Container} from "react-bootstrap";
import "../styles/homePage.css";

import HeaderNavbar from "../components/HeaderNavBar";
import Footer from "../components/Footer";
import CircularButton from "../components/CircularButton";
import SearchBar from "../components/SearchBar";

import { faBagShopping, faUtensils, faScrewdriverWrench, faHandshake, faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <div>
            <HeaderNavbar />

            {/* Background Picture with Search Bar */}
            <div className="background-picture">
                <SearchBar />
            </div>

            <div className="separator"> </div>

            {/* Popular Categories */}
            <Container className="popular-categories my-2">
                <CircularButton label="Eat" icon={faUtensils}/>
                <CircularButton label="Fix" icon={faScrewdriverWrench}/>
                <CircularButton label="Get Service" icon={faHandshake}/>
                <CircularButton label="Shopping" icon={faBagShopping}/>
                <CircularButton label="Go Out" icon={faUmbrellaBeach}/>
            </Container>

            {/* Map with Businesses */}
            <Container className="mt-5">
                <div className="map-section">
                    <div className="map"> </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
};

export default HomePage;
