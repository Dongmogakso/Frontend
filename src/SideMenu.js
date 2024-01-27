import { useEffect, useState } from "react";

export default function SideMenu() {
    const [isOpen, setIsOpen] = useState();

    useEffect(() => {
        setIsOpen(true);
    }, []);
    
    return (
        <div className="absolute z-10 h-screen w-screen">
        {isOpen ?
        (
            <div className="bg-white w-1/3 h-screen pt-16">
                ㅇㅇㅇ
            </div>
        ) : (
            <div>
            </div>
        )}
        </div>
    );
}