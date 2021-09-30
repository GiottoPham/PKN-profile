import avatar from "../../assets/avatar.jpg";
import cv from "../../assets/cv.pdf";
import CustomTimeline from "../CustomTimeline/CustomTimeline";
import DownloadIcon from '@mui/icons-material/Download';
export default function Profile() {
    return (
        <div className="relative flex flex-col overflow-hidden shadow-xl bg-white rounded-xl">
            <div className="px-2 pt-5 -mb-2">
                <h1 className="text-xl font-bold uppercase">Pham Khang Nguyen</h1>
                <h2 className="text-sm text-gray-500">Frontend Intern</h2>
            </div>
            <div className="w-full h-52 polygonbot">
                <img className="w-full h-full object-cover object-top" src={avatar} />
            </div>
            <div className="relative">
                <CustomTimeline />
                <div className="flex flex-row w-full justify-center items-center px-2 py-5 ">
                    <a className="md:w-1/2 w-5/12 flex flex-row bg-myYellow text-center rounded-3xl h-10 items-center px-3 font-bold" href={cv} download="cv.pdf"><span className="flex-grow">Dowload CV</span> <DownloadIcon className="animate-bounce text-black bg-white rounded-full px-1" />
                    </a>
                </div>
            </div>
        </div>
    )
}