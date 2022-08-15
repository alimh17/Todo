import React, { useState } from 'react'
import Navbar from 'components/navigation/navbar'
import MainContext from 'context/MainContext'

const MainLayout = (props) => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [activeTab, setAcitveTab] = useState([true, false])

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const handleAcitveTab = (indexTab) => {
        let copyAcitveTab = [...activeTab]
        copyAcitveTab = [false, false]
        copyAcitveTab[indexTab] = true
        setAcitveTab(copyAcitveTab)
    }

    return (
        <MainContext.Provider value={{ showSidebar, handleShowSidebar, activeTab, handleAcitveTab }}>
            <Navbar />
            {props.children}
        </MainContext.Provider>
    )
}

export default MainLayout