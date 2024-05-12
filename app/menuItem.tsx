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
        <h4 className='flex px-5 py-3 border-solid border-2 border-slate-300 rounded-full overflow-hidden relative menu-item'>
            <Link className="m-auto" href={menu.urlSegment} onClick={(e) => menuClickCallback(menu.index)}>{menu.name}</Link>
        </h4>
    )
}