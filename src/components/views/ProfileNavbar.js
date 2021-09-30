import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
export default function ProfileNavbar() {
    const { pathname } = useLocation();
    const [show, setShow] = useState(true);
    const hide = show === false ? "" : "hidden";
    console.log(pathname);
    const under1 = (pathname === "/resume" || pathname === "/") ? "md:border-b-4 border-myYellow text-myYellow" : "";
    const under2 = pathname === "/skill" ? "md:border-b-4 border-myYellow text-myYellow" : "";
    const under3 = pathname === "/project" ? "md:border-b-4 border-myYellow text-myYellow" : "";
    const under4 = pathname === "/contact" ? "md:border-b-4 border-myYellow text-myYellow" : "";
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white rounded-xl overflow-hidden mb-10">
            <Link to="/" className="flex items-center justify-center h-16 bg-myYellow w-16">
                <HomeIcon />
            </Link>
            <div className="block lg:hidden">
                <button onClick={()=>setShow(!show)}className="flex items-center px-3 py-2 rounded hover:text-myYellow hover:text-white hover:border-white">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-5 "+hide}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/resume" className={"a1 " + under1}>
                        Resume
                    </Link>
                    <Link to="/skill" className={"a1 " + under2}>
                        Skill
                    </Link>
                    <Link to="/project" className={"a1 " + under3}>
                        Project
                    </Link>
                    <Link to="/contact" className={"a1 " + under4}>
                        Contact
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row md:mt-0 md:ml-0 md:mb-0 md:items-center mt-5 ml-5 mb-5 mr-5">
                <div className="flex md:mb-0 mb-5">
                <a href="https://www.facebook.com/giotto.pham/" target="_blank" rel="noreferrer"><div className="rounded-full h-8 w-8 border-2 border-black flex justify-center items-center mr-3 hover:border-myYellow text- text-sm hover:text-myYellow">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div></a>
                <a href="https://www.linkedin.com/in/khang-nguy%C3%AAn-ph%E1%BA%A1m-680486219/" target="_blank" rel="noreferrer"><div className="rounded-full h-8 w-8 border-2 border-black flex justify-center items-center mr-3 hover:border-myYellow text- text-sm hover:text-myYellow">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div></a>
                <a href="https://github.com/GiottoPham" target="_blank" rel="noreferrer"><div className="rounded-full h-8 w-8 border-2 border-black flex justify-center items-center mr-3 hover:border-myYellow text- text-sm hover:text-myYellow">
                    <FontAwesomeIcon icon={faGithub} />
                </div></a>
                </div>
                <div className="flex flex-row justify-between bg-myYellow text-center rounded-3xl h-10 items-center px-3 font-bold">
                    <span className="mr-2">Available</span> <SendIcon className="text-black bg-white rounded-full px-1" /></div>
                </div>
            </div>
        </nav>
    )
}