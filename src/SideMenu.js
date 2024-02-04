import { useEffect, useState } from "react";

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState();

    useEffect(() => {
        setIsOpen(true);
    }, []);
    
    function openSideMenu() {
        setIsOpen(true);
    }

    function closeSideMenu() {
        setIsOpen(false);
    }

    return (
        <div className="absolute h-screen w-screen">
        {isOpen ?
        (
            <div className="flex items-center flex-row">
                <div className="bg-red-300 w-1/3 h-screen pt-16 z-10">

                </div>
                <div className="w-14 z-10">
                <div className="bg-blue-300 w-14 h-36 z-10 rounded-tr-lg rounded-br-lg" onClick={closeSideMenu}></div>
                </div>
            </div>
            
        ) : (
            <div className="flex h-screen w-14 items-center">
                <div className="bg-blue-300 w-14 h-36 z-10 rounded-tr-lg rounded-br-lg" onClick={openSideMenu}>

                </div>
            </div>
        )}
        </div>
    );
}