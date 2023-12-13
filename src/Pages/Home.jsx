import Aboute from "../componets/Aboute";
import Banner from "../componets/Banner"
import Projects from "../componets/Projects";
import Services from "../componets/Services";
import Users from "../componets/Users";
import Testmonial from "../componets/Testmonial";
import Contact from "../componets/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Aboute></Aboute>
      <Services></Services>
      <Projects></Projects>
      <Users></Users>
      <Testmonial></Testmonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;