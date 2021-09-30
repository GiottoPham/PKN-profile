import { useState } from "react";

export default function ProjectCard(props) {
    const { title, position, year, desc, img, tech } = props;
    const [show, setShow] = useState(false);
    return (
        <div className="w-full shadow-xl rounded-xl flex flex-col overflow-hidden flex-initial">
            <img src={img} className="w-full h-32 object-cover object-top"></img>
            <div className="relative px-2 py-2 flex flex-col justify-end">
                <h1 className="font-semibold text-gray-600 text-center uppercase">{title}</h1>
                <p className="text-left"><strong>Techniques: </strong> {tech}</p>
                {show &&
                    (<p className="text-left"><strong>Position: </strong> {position}<br />
                        <strong>Time: </strong> {year}<br />
                        <strong>Description: </strong> {desc}</p>)}
                <button onClick={() => setShow(!show)} className="bg-myYellow rounded-xl px-2 py-2 self-center mt-2 flex-grow">{!show ? "More Info" : "Less Info"}</button>


            </div>
        </div>
    )
}