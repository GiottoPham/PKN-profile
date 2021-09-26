import { useState } from "react"
export default function Navbar() {
    const [show, setShow] = useState(true);
    const hide = show === false ? "" : "hidden";
    return (
        <nav className="flex items-center justify-between bg-white p-4 flex-wrap">
            <a href="#" className="flex items-center text-primary1 mr-6 hover:text-button1 flex-shrink-0">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
            </a>
            <div className="block lg:hidden">
                <button onClick={() => setShow(!show)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-primary1 hover:border-primary1">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={"w-full block lg:flex lg:items-center lg:w-4/12 lg:justify-end " + hide}>
                <div className="text-sm mr-5 lg:flex lg:flex-row">
                    <a href="#" className="a1">
                        Docs
                    </a>
                    <a href="#" className="a1">
                        Examples
                    </a>
                    <a href="#" className="a1">
                        Blog
                    </a>
                </div>
                <div>
                    <button className="text-sm bg-white border-2 border-primary1 text-primary1 rounded px-4 py-1 lg:mt-0 mt-4 hover:bg-primary1 hover:text-white">Sign In</button>
                </div>
            </div>
        </nav>
    )
}