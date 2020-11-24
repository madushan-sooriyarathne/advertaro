import Page from "../components/layout/page/Page";
import Newsletter from "../components/layout/newsletter/Newsletter";
import Header from "../components/layout/header/Header";
import TitledDescription from "../components/layout/titled-description/TitledDescription";

const description = [
  `The world is getting smaller in complex to "ones and zeros", other words we are becoming digital or adopted by. "It's nowhere (Physically) but everywhere (Virtually)" to express how digital approaches every aspect of the present day. At the ending of the 20th-century digital was introduced to the public when people had embraced the technology, it was satisfying them as it was intended to, it was born in the 20th century & grown up in the 21st century to be mature enough to assist us on the day-to-day tasks.`,
  `Upon evolving everything parallel to each, so Marketing was never left behind, Digital Marketing has slowly overtaken the influence made by traditional marketing among the different audiences & clienteles. People tend to decide everything looking at their PC or the mobile through various platforms even on web surfing such as looking at websites, checking emails, involvement with social media, search engines, or even affiliated sites and mobile applications in various terms.`,
  `Discussing consumer behavior relevant to digital marketing, they will be enabled deciding what to take, when to take and from where to take, also to discuss among people, compare the products, clarifications prior purchasing and feasibility of contacting the merchandisers are the conveniences public find from digital approach and debate the merchandisers on other hand, reach of any business being extended to grater outreaches by allowing them to sell their products or services to target based clientele or even to mass audiences on digital platforms, with an indirect influence, unlike the traditional marketing exceptional expose is supported enabling to track & trace all the activities in real-time where the merchandisers are up to date with their selling tactics.`,
  `Space where digital stands between consumer and merchandiser were furnished by digital marketing agencies to expand the reach of any product or service.`,
  `A Freelance Company Started in 2018 in order to consult modest to mid-scale business assisting on approaching the respected market places via different platforms, Consulting Digital and Traditional marketing together & expanded further to establish “Advertaro” in 2019.`,
  `Extensive segments of digital marketing are entirely covered by advertaro assisting clients to be ultramodern and sync with the latest technology available. From Web development to Content-based Marketing, search engine optimization (SEO) to Search Engine Marketing (SEM) and comprehensive Social Media Marketing (SSM) to Mobile Application with Affiliated marketing are perfected with strong attention to detail. the concept that advertaro follows is, where the right clientele is nothing can't be traded. following the same principle, our team always looks thought the potential as well as being vigilant with the market conditions with respect to each product or service.`,
  `Advertaro is not only consulting digital marketing where the traditional making as well covered to a certain extent, such as conventional advertising and telemarketing where potential lies with certain services and products. occasionally good old tactics are working in some instances where the type of product or service anchored.`,
  `Advertaro is involved in the Travel, Leisure, Hospitality, and Concierge industries at present on handling marketing protocols to maximize sales by maintaining both revenue and yield management. A target-oriented / result-driven working model will assure the clients' expectations to the level. Targeting correct clientele is the prime principle what advertaro team follows. also, before initiating any project, considerable time will be spent on research and devolvement which will fine-tune all the strategies. dispute type of product or the service, A Target base Marketing concept will only help any organization to grow further, Advertaro always initiate the same model where the result has to be factful against all the initiating marketing strategies as only outcomes can decide whether the strategy used was actual or to rectify any issues relevant to the market condition or strategies used.`,
  `A Target Base marketing concept to follow targeting the right clientele on different platforms is the prime model Advertaro go along, to enable the best results what client expects. veterans from the Marketing field and young IT experts are always dealing with the frontline in order to deliver the committed tasks to outperform the expectations of our clients. meeting the expected timeline with anticipated targets are highly concentrated among the team members. The world is getting smaller and complex in digital form but we are to make sure all will be taken care at your trade convenience on Digital Marketing.`,
  `Any Business is a story that listens by others on how you tell it!`,
];

const About = () => {
  return (
    <Page>
      <Header title="The creative agency created to do things differently." />
      <TitledDescription
        title="Advertaro Creative Agency"
        subtitle="A independent creative marketing firm offering marketing solutions to sole business & merchandisers"
        descriptions={description}
      />
      <Newsletter />
    </Page>
  );
};

export default About;
