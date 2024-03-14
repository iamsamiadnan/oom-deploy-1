'use client'
import ProjectDropdown from '@/components/ProjectDropdown/ProjectDropdown';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { useState } from 'react'

export default function Layout({ children }) {

    const [project, setProject] = useState(false);

  return (

    <div className="flex h-screen">
        {/* <aside className="w-[300px] bg-[#012169] px-4 py-[15px]">
            <div className="flex gap-[7px] items-center">
                <div className="w-8 h-8 rounded-full bg-[#71D99C]">
                    { project ? <img src="" /> : <div className="w-full h-full flex justify-center items-center font-semibold text-white relative top-[1px]">L</div> }
                    
                </div>
                <ProjectDropdown />
            </div>
        </aside> */}


            <Sidebar />
        <main className="flex-1 pt-8 pl-[154px]" >
        { children }
        </main>
    </div>
  )
}
