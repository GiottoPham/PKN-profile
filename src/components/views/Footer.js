import { emphasize } from "@mui/system";

export default function Footer(){
    return(
        <footer className="bg-black rounded-xl w-full flex md:justify-between md:flex-row flex-col h-14 px-5 md:py-5 items-center mt-10">
        <h1 className="text-myYellow text-sm font-bold uppercase">Pham Khang Nguyen</h1>
        <p className="text-white text-xs md:text-right text-center">Developed responsive by <strong className="text-myYellow">Pham Khang Nguyen</strong>
        <br/> September 2021
        </p>
        </footer>
    )
}