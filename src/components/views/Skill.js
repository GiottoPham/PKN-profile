import { useEffect, useState } from 'react';
import { SkillBar } from 'react-skills';
import web from "../../assets/web-development.svg";
import mobile from "../../assets/mobile-app-development.svg";
import database from "../../assets/database.svg";
export default function Skill() {
    const [value, setValue] = useState(false);
    const barWidth = value === true ? "w-3/5" : "w-0";
    const barWidth2 = value === true ? "w-2/5" : "w-0";
    const barWidth3 = value === true ? "w-2/5" : "w-0";
    useEffect(() => {
        setValue(true);
    }, []);
    return (
        <div className="relative flex flex-col overflow-hidden shadow-xl bg-white rounded-xl px-5 py-5">
            <div className="flex flex-row">
                <h1 className="flex-initial border-b-4 border-myYellow font-bold text-xl mb-5">Programming Languages</h1>
            </div>
            <h1 className="font-bold mb-2">C/C++</h1>
            <div className="h-5 relative max-w-xl rounded overflow-hidden mb-2">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className={"transition-all ease-out duration-1000 h-full bg-myYellow relative " + barWidth}></div>
            </div>
            <h1 className="font-bold mb-2">JavaScript</h1>
            <div className="h-5 relative max-w-xl rounded overflow-hidden mb-2">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className={"transition-all ease-out duration-1000 h-full bg-myYellow relative " + barWidth2}></div>
            </div>
            <h1 className="font-bold mb-2">Python</h1>
            <div className="h-5 relative max-w-xl rounded overflow-hidden mb-2">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className={"transition-all ease-out duration-1000 h-full bg-myYellow relative " + barWidth3}></div>
            </div>
            <div className="flex flex-row mt-5">
                <h1 className="flex-initial border-b-4 border-myYellow font-bold text-xl mb-5">Technical Skills</h1>
            </div>
            <div className="flex flex-row mt-5 items-center text-gray-600 flex-wrap">
                <div className="md:w-1/3 w-full flex flex-col text-center mb-5">
                    <img src={web} className="md:h-36 h-24" />
                    <h1 className="text-xl text-center font-semibold">Web Development</h1>
                    <p>Techniques: HTML/CSS, PHP, ReactJS</p>
                </div>
                <div className="md:w-1/3 w-full flex flex-col text-center mb-5">
                    <img src={mobile} className="md:h-36 h-24" />
                    <h1 className="text-xl text-center font-semibold">Mobile App Development</h1>
                    <p>Techniques: Flutter, Java</p>
                </div>
                <div className="md:w-1/3 w-full flex flex-col text-center mb-5">
                    <img src={database} className="md:h-36 h-24" />
                    <h1 className="text-xl text-center font-semibold">Database</h1>
                    <p>Techniques: MySQL</p>
                </div>
            </div>
            <div className="flex flex-row mt-5">
                <h1 className="flex-initial border-b-4 border-myYellow font-bold text-xl mb-5">Other Skills</h1>
            </div>
            <p> I also used to work with Git (GiHhub/GitLab), Restful API, Latex</p>
        </div>)
}