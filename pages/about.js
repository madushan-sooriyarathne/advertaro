import Page from "../components/layout/page/Page";
import SpecialtiesSection from "../components/layout/specialties/SpecialtiesSection";
import CTABanner from "../components/layout/cta-banner/CTABanner";
import Header from "../components/layout/header/Header";
import TitledDescription from "../components/layout/titled-description/TitledDescription";

// put this item into some online CRM
const specialties = [
  {
    image: "/static/img/social-media.jpg",
    title: "Social Media",
    description:
      "We help brands tailor their social media strategy, with a focus on Instagram, Facebook and Google My Business we can help your brand stand out from the crowd.",
  },
  {
    image: "/static/img/web-dev.jpg",
    title: "Web Design & Development",
    description:
      "Our team develop websites Custom Tailor-made websites or website that runs on WordPress, Drupal and Shopify, creating data-driven user experiences which are memorable and engaging.",
  },
  {
    image: "/static/img/ui.jpg",
    title: "World Class Designs",
    description:
      "	UX & responsive web design are at the heart of each of our websites: WordPress, Shopify or Drupal - we build and design mobile first.",
  },
  {
    image: "/static/img/web-content.jpg",
    title: "CRM & Content Creation",
    description:
      "Our CRM and eMarketing platform helps you connect with your customers in a personalized way. Our team will help you with messaging and segmentation.",
  },
  {
    image: "/static/img/ecommerce.jpg",
    title: "Ecommerce",
    description:
      "From luxury fashion to disruptive FMCG, we create beautiful eCommerce stores with Shopify Plus and Shopify for new and established brands.",
  },
  {
    image: "/static/img/insight.jpg",
    title: "Strategy & Insight",
    description:
      "We’re dedicated to building a digital marketing strategy that will put you on the path to success and will keep you informed about digital marketing trends.",
  },
];

const About = () => {
  return (
    <Page>
      <Header title="The creative agency created to do things differently." />
      <TitledDescription
        title="Advertaro Creative Agency"
        subtitle="A independent creative marketing firm offering marketing solutions to sole business & merchandisers"
        description={`A freelance company started in early 2019 order to consult small to mid-scale business on approaching to the respected market places via different platforms and expanded further as an organization named "Advertaro" in late 2019
    
      Currently involved in Travel, Leisure & Concierge sectors assisting on marketing protocols to maximize sales by maintaining revenue and yield managements. 

      A target base marketing concept to follow targeting the right clientele on different platforms in the prime model advertaro go along to enable the best results what the client expects.
      `}
      />
      <SpecialtiesSection specialties={specialties} />
      <CTABanner
        title="Have a project in mind?"
        subtitle="We'd love to hear it from you!"
        button={{ text: "Say Hello", url: "/contact" }}
      />
    </Page>
  );
};

export default About;
