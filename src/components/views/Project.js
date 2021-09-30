import ProjectCard from "../ProjectCard/ProjectCard";
import image1 from "../../assets/screen-1.png";
import image2 from "../../assets/screen-2.png";
import image3 from "../../assets/screen-3.png";
export default function Project() {
    return (
        <div className="relative flex flex-col overflow-hidden shadow-xl bg-white rounded-xl px-5 py-5">
            <div className="flex flex-row">
                <h1 className="flex-initial border-b-4 border-myYellow font-bold text-xl mb-5">Projects</h1>
            </div>
            <div className="flex md:flex-row md:justify-center flex-col">
            <div className="flex flex-col md:w-3/12 mr-10 w-full mb-5">
            <ProjectCard title="BookStore Website" position="Frontend Developer" tech="ReactJS
" desc="Developing an online bookstore website used for e-commerce" img={image1} year="SEPTEMBER 2021 -
PRESENT"/>
            </div>
            <div className="flex flex-col md:w-3/12 mr-10 mb-5 w-full">
            <ProjectCard title="SMART WATERING SYSTEM" position="Developer" tech="Java (Mobile)
" desc="Developing a mobile app with Adafruit IO. This app supports watering trees, evaluating
temperature and humid soil,..." img={image2} year="APRIL 2021 - JULY 2021
"/>
            </div>
            <div className="flex flex-col md:w-3/12 mb-5 w-full">
                <ProjectCard title="ONLINE PUBLICATION WEB" position="Developer" tech="PHP, MySQL
" desc="Developing a website to support authors, editors and reviewers of a journal when review and
publish papers" img={image3} year="DECEMBER 2020 -
JANUARY 2021
"/>
</div>
            </div>
        </div>
    )
}