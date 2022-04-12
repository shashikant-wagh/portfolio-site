import About from "../components/about";
import Skills from "../components/skills";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import BlogPosts from "../components/blog-posts";
import BackToTop from "../components/back-to-top";
import Experience from "../components/experience";
import Testimonial from "../components/testimonial";
// import MobileLogo from "../components/mobile/mobile-logo";
import MobileNavToggle from "../components/mobile/mobile-nav-toggle";
import NavBar from "../components/navigation/navbar";

const Home = () => (
  <>
    <div id="top"></div>

    {/* <!-- Mobile logo --> */}
    {/* <MobileLogo /> */}

    {/* <!-- Navigation toggle --> */}
    <MobileNavToggle />

    {/* <!-- Site nav --> */}
    <NavBar />

    {/* <!-- Header overlay --> */}
    <div className="header-overlay">
      <div className="overlay-inner bg-dark opacity-80"></div>
    </div>

    {/* <!-- Back to top button --> */}
    <BackToTop />

    {/* <!-- Global cover background --> */}
    <div className="global-cover-bg">
      <div className="overlay-inner bg-image-holder bg-cover">
        <img src="assets/demo/images/image-1.jpg" alt="background" />
      </div>
    </div>

    {/* <!-- Page wrapper --> */}
    <div className="page-wrapper">
      <Banner />
      <div className="page-content">
        <About />
        <Skills />
        <Experience />
        {/* <Portfolio /> */}
        <Testimonial />
        <BlogPosts />
        <Contact />
        <Footer />
      </div>
    </div>
  </>
);

export default Home;
