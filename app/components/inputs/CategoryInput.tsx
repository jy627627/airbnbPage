'use client'

import {IconType} from "react-icons";
import React from "react";

interface CategoryInputProps {
    label: string,
    icon: IconType,
    selected?: boolean,
    onClick: (value:string) => void
}

export const CategoryInput:React.FC<CategoryInputProps> = ({
   label,
   icon: Icon,
   selected,
   onClick
}) => {

    return (
        <div
            onClick={ ()=>  onClick(label) }
            className={`
                rounded-xl
                border-2
                p-4
                flex
                flex-col
                gap-3
                hover:border-black
                transition
                cursor-pointer
                ${selected ? 'border-black' : 'border-neutral-200'}
            `}
        >
            <Icon size={ 30 }/>
            <div className="font-semibold">
                { label }
            </div>
        </div>
    )
}
