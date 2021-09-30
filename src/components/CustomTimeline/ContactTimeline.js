import ContactsIcon from '@mui/icons-material/Contacts';
export default function ContactTimeline() {
    return (
        <div className="relative w-full h-full pt-5 px-5 ml-5">
            <div className="absolute top-0 left-1 z-20 flex items-center -ml-6">
            <div className="bg-myYellow h-12 w-12 rounded-full flex items-center justify-center"> <ContactsIcon className="text-black" />
            </div>
                    <p className="leading-snug text-sm tracking-wide text-gray-900 text-opacity-100 ml-2"><strong className="text-2xl">My Contact</strong>
                    <br/>You can contact me via those methods
                    </p>
            </div>
            <div className="absolute top-0 left-0 border-opacity-20 border-gray-700 h-64 border-l border-r w-1 h-1"></div>
            <div className="mb-3 flex items-center w-full mt-14">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-6">
                </div>
                <div className="px-2 py-2">
                    <h1 className="text-black font-bold">Zalo/Mobile</h1>
                    <p className="text-sm leading-snug tracking-wide text-opacity-100 text-gray-600">
                    Phone number: 0854662633
                    </p>
                </div>
            </div>
            <div className="mb-3 flex items-center w-full">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-6">
                </div>
                <div className="px-2 py-2">
                    <h1 className="text-black font-bold">Email</h1>
                    <p className="text-sm leading-snug tracking-wide text-opacity-100 text-gray-600">
                    Email: giotto2015.py@gmail.com
                    </p>
                </div>
            </div>
            <div className="mb-3 flex items-center w-full">
                <div className="z-20 flex items-center bg-myYellow shadow-xl w-3 h-3 rounded-full -ml-6">
                </div>
                <div className="px-2 py-2">
                    <h1 className="text-black font-bold">Facebook</h1>
                    <p className="text-sm leading-snug tracking-wide text-opacity-100 text-gray-600">
                    https://www.facebook.com/giotto.pham/
                    </p>
                </div>
            </div>
        </div>
    )
}