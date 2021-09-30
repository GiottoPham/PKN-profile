import logo from "../../assets/logo.svg";
import mockup from "../../assets/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Navbar/Navbar";
function Landing() {
  return (
    <div className="relative bg-primary1 min-h-screen">
    <Navbar/>
      <div className="md:bg-desktop bg-mobile min-h-screen bg-contain bg-center bg-no-repeat px-10">
        <img className="px-5 py-5" src={logo} alt="Logo" />
        <div className="flex md:flex-row flex-col px-5 py-5">
          <img className="md:w-8/12 w-full" src={mockup} alt="Mockup" />
          <div className="flex flex-col py-20 px-14">
            <h1 className="font-poppins text-white text-3xl font-bold leading-normal">Build The Community<br /> Your Fans Will Love</h1>
            <p className="text-white font-opensans text-xl pt-10">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button className="hover:bg-button1 hover:text-white bg-white text-primary1 text-xl rounded-3xl mt-10 w-36 px-2 py-2 shadow-2xl">Register</button>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex flex-row">
      <div className="rounded-full h-10 w-10 border-2 border-white flex justify-center items-center mr-5 hover:border-button1 text-white text-sm hover:text-button1">
      <FontAwesomeIcon icon={faFacebookF}/>
      </div>
      <div className="rounded-full h-10 w-10 border-2 border-white flex justify-center items-center mr-5 hover:border-button1 text-white text-sm hover:text-button1">
      <FontAwesomeIcon icon={faTwitter}/>
      </div>
      <div className="rounded-full h-10 w-10 border-2 border-white flex justify-center items-center mr-5 hover:border-button1 text-white text-sm hover:text-button1"><FontAwesomeIcon icon={faInstagram}/></div>
      </div>
      </div>
    </div>
  );
}

export default Landing;