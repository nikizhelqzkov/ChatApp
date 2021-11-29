import React from 'react'
import Conversations from './conversations'
import Header from './header'
import Search from './search'

const Menu = () => {
    return (
        <>
            <Header/>
            <Search/>
            <Conversations/>
        </>
    )
}

export default Menu
