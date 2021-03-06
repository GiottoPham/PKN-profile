import SchoolIcon from '@mui/icons-material/School';
export default function EducationTimeline() {
    return (
        <div className="relative w-full h-full pt-5 px-5 ml-5">
            <div className="absolute top-0 left-1 z-20 flex items-center -ml-6">
            <div className="bg-myYellow h-12 w-12 rounded-full flex items-center justify-center"> <SchoolIcon className="text-black" />
            </div>
                    <p className="text-2xl leading-snug tracking-wide text-gray-900 text-opacity-100 ml-2"><strong>Education</strong></p>
            </div>
            <div className="absolute top-0 left-0 border-opacity-20 border-gray-700 h-28 border-l border-r w-1 h-1"></div>
            <div className="mb-3 flex items-center w-full mt-14">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-6">
                </div>
                <div className="px-2 py-2">
                    <h1 className="text-black font-bold">Ho Chi Minh University of Technology</h1>
                    <p className="text-sm leading-snug tracking-wide text-opacity-100 text-gray-600">
                    August 2018 - Present (4th-year)
                    <br/>Computer Science - Honor Program - GPA: 8.19
                    </p>
                </div>
            </div>
        </div>
    )
}