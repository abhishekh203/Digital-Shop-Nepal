// src/pages/home/HomePage.js

import BrandsStock from "../../components/Brandstock/BrandStock";
import Category from "../../components/category/Category";
import ContactUs from "../../components/Contactus/ContactUs";
import FooterOtt from "../../components/footerott/FooterOtt";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import OTTSubscriptionInfo from "../../components/Ottsubscriptioninfo/OTTSubscriptionInfo";
import CustomerReviews from "../../components/Review/Review";
import ReviewsComponent from "../../components/Reviewscomponent/ReviewsComponenet";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <OTTSubscriptionInfo/>
            <BrandsStock/>
            {/* <CustomerReviews/> */}
           
            <ReviewsComponent/>
            <Testimonial/>
             <ContactUs/>
            <FooterOtt/>
            {/* <Loader/> */}
        </Layout>
    );
}

export default HomePage;
