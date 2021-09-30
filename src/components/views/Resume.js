import WorkingTimeline from "../CustomTimeline/WorkingTimeline";
import EducationTimeline from "../CustomTimeline/EducationTimeline";
export default function Resume() {
    return (
        <div className="relative flex flex-col overflow-hidden shadow-xl bg-white rounded-xl px-5 py-5">
            <div className="flex flex-row">
            <h1 className="flex-initial border-b-4 border-myYellow font-bold text-xl">About me</h1>
            </div>
            <p className="mb-10">I'm Pham Khang Nguyen, 4th-year student at Ho Chi Minh university. I'm looking for a position as Frontend Intern (ReactJS) that
                will demand the best of my
                professional ability in terms of
                technical skills, and helps me in
                enhancing my current skill and
                knowledge.</p>
                <div className="flex flex-row">
            <h1 className="flex-initial border-b-4 border-myYellow font-bold mb-5 text-xl">Resume</h1>
            </div>
            <div className="w-full flex md:flex-row flex-col">
                <WorkingTimeline />
                <EducationTimeline />
            </div>
        </div>)
}