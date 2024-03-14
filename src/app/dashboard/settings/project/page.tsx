
import Input from '@/components/Input/Input'
import { Space } from 'antd'
import React from 'react'

export default function page() {
  return (
    <div className="">
        <div className="mb-8"><h1 className="font-semibold text-[28px] leading-[33.6px] tracking-[-0.32px]">Project information</h1></div>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="project_name" className="font-medium text-sm leading-[21px] text-[#4C4C4C]">Project name</label>
            <Input id="project_name" placeholder="Enter project name" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="project_address" className="font-medium text-sm leading-[21px] text-[#4C4C4C]">Project address</label>
            <Input id="project_address" placeholder="Enter project address" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="zip_code" className="font-medium text-sm leading-[21px] text-[#4C4C4C]">ZIP code</label>
            <Input id="zip_code" placeholder="Enter zip code" />
          </div>

   

        </form>
    </div>
  )
}
