import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
export default function CustomTimeline() {
    return (
        <div className="relative w-full h-full pt-5 px-5 -mt-5 ml-2 mb-5">
            <div className="absolute top-0 left-0 bg-myYellow h-10 w-10 rounded-full flex items-center justify-center z-20"> <PersonIcon className="text-black" /></div>
            <div className="border-2-2 absolute top-1 border-opacity-20 border-gray-700 h-68 border"></div>
            <div className="mb-3 flex items-center w-full mt-10">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-1">
                </div>
                <div className="px-2 py-2">
                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><strong>Name: </strong>Pham Khang Nguyen</p>
                </div>
            </div>

            <div className="mb-4 flex items-center w-full">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-1">
                </div>
                <div className="px-2 py-2">
                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><strong>Birthday: </strong>November 28th, 1999</p>
                </div>
            </div>
            <div className="mb-4 flex items-center w-full">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-1">
                </div>
                <div className="px-2 py-2">
                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><strong>Job: </strong>ReactJS Intern</p>
                </div>
            </div>
            <div className="mb-4 flex items-center w-full">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-1">
                </div>
                <div className="px-2 py-2">
                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><strong>Email: </strong>giotto2015.py@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center w-full">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-1">
                </div>
                <div className="px-2 py-2">
                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><strong>Phone: </strong>0854662633</p>
                </div>
            </div>
        </div>
    )
}