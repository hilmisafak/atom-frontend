import Header from "../../components/public/Header";
import Hero from "../../components/public/Hero";
import Services from "../../components/public/Services";
import RoutesSection from "../../components/public/RoutesSection";
import WhyUs from "../../components/public/WhyUs";
import GalleryPreview from "../../components/public/GalleryPreview";
import QuoteForm from "../../components/public/QuoteForm";
import ContactCTA from "../../components/public/ContactCTA";
import Footer from "../../components/public/Footer";
import MobileActionBar from "../../components/public/MobileActionBar";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <RoutesSection />
            <WhyUs />
            <GalleryPreview />
            <QuoteForm />
            <ContactCTA />
            <Footer />
            <MobileActionBar />
        </>
    );
}

export default Home;