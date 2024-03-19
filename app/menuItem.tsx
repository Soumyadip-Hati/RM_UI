'use client'

import { useState } from 'react'
import Menu from './models/menu'
import Link from 'next/link'

export default function MenuItem({ menu, menuClickCallback }: { menu: Menu, menuClickCallback: (i: number) => void }) {
    const [menuState, setMenuState] = useState(menu);

    // function setMenuSelection() {
    //     menuState.isSelected = true;
    //     let { name, index, urlSegment, isSelected } = menuState;
    //     setMenuState({ name, index, urlSegment, isSelected });
    // }

    return (
        <li className={`flex px-3 ${menu.isSelected ? `border-solid border-2 border-slate-100 rounded` : ``} ${menu.index == 0 ? `rounded-tl-none rounded-bl-none` : ``} `}><Link className="m-auto" href={menu.urlSegment} onClick={(e) => menuClickCallback(menu.index)}>{menu.name}</Link></li>
    )
}