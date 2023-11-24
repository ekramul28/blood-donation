import HelmetAll from "../../shared/Helmet/HelmetAll";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import PopularCampaigns from "../Popular/PopularCampaigns";

const Home = () => {
    return (
        <div>
            <HelmetAll title="Grant | Home"></HelmetAll>
            <Banner></Banner>
            <Featured></Featured>
            <PopularCampaigns></PopularCampaigns>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;