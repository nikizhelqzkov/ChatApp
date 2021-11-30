import React from 'react'
import Conversations from './conversations/Conversations'
import Header from './header/Header'
import Search from './search/Search'

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
