import ContactTimeline from "../CustomTimeline/ContactTimeline";

export default function Contact() {
    return (
        <div className="relative flex flex-col overflow-hidden shadow-xl bg-white rounded-xl px-5 py-5">
        <div className="flex flex-row">
                <h1 className="flex-initial border-b-4 border-myYellow font-bold text-xl mb-5">Contacts</h1>
            </div>
            <ContactTimeline/>
        </div>
    )
}