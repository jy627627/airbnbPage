'use client'


import { Container } from '../Container'
import { Logo } from '../navbar/Logo'
import { Search } from '../navbar/Search'
import { UserMenu } from '../navbar/UserMenu'
import { Categories } from '../navbar/Categories'
import React from "react";
import { SafeUser } from "@/app/types"



interface NavbarProps {
    currentUser?: SafeUser | null
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    console.log('user',{ currentUser })
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b[1px]">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        <Logo/>
                        <Search />
                        <UserMenu
                            currentUser={ currentUser }
                        />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    )
}
