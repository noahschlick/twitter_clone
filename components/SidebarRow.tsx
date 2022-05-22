import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 px-4 py-3 rounded-full transistion-all
    hover:bg-gray-100 duration-200">
        <Icon className="h-6 w-6"/>
        <p className="hidden text-base front-light group-hover:text-twitter md:inline-flex">{title}</p>
    </div>
  )
}

export default SidebarRow
