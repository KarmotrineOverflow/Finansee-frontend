import { useState, useContext, createContext } from 'react'
import type { ReactNode } from "react";
import { ChevronFirst, ChevronLast, type LucideIcon } from "lucide-react";

type NavChildren = {

    children: Array<ReactNode>
}

type NavItem = {

    icon: ReactNode,
    label: string
    active: boolean,    
}

const SidebarContext = createContext(true)

export default function Sidebar({ children }: NavChildren) {

    const [isActive, setIsActive] = useState<boolean>(true)

    return (
        <aside className={`h-screen bg-blue-950 ${isActive
            ? "w-72"
            : "w-20"
        }`}>
            <nav className="h-full flex flex-col shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="/finansee_logo_2.png" className={`${
                        isActive
                            ? "w-36"
                            : "w-0"
                    }`} />
                    <button onClick={() => setIsActive(!isActive)} className="p-1.5 rounded-lg">
                        {isActive
                            ? <ChevronFirst color="white" strokeWidth={2}/>
                            : <ChevronLast color="white" strokeWidth={2}/>
                        }
                    </button>
                </div>

                <SidebarContext.Provider value={isActive}>
                    <ul className="flex-1 px-3">
                        {children}
                    </ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    )
}

export function SidebarItems({ icon, label, active }: NavItem) {

    const isActive = useContext(SidebarContext)

    return (
        <div className={` text-white relative flex items-center p-3 my-1 font-medium rounded-md cursor-pointer
        transition-colors
        ${active
            ? "bg-blue-900"
            : "hover:bg-blue-900"
        }
        `}>
            {icon}
            <span className={`overflow-hidden transition-all
                ${
                    isActive
                        ? "w-52 ml-3"
                        : "w-0 ml-0"
                }    
            `}>
                {label}
            </span>            
        </div>
    )
}