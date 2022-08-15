import React, { useState } from 'react'
import Navbar from 'components/navigation/navbar'
import MainContext from 'context/MainContext'
import AddTask from 'components/add_task/addTask'

const MainLayout = (props) => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [activeTab, setAcitveTab] = useState([true, false])
    const [showFormAddTask, setShowFormAddTask] = useState(false)
    const [todos, setTodos] = useState([])

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const handleAcitveTab = (indexTab) => {
        let copyAcitveTab = [...activeTab]
        copyAcitveTab = [false, false]
        copyAcitveTab[indexTab] = true
        setAcitveTab(copyAcitveTab)
    }

    const handleShowFormAddTask = () => {
        setShowFormAddTask(!showFormAddTask)
    }

    const handleSetTodos = (todo, date, day) => {
        const copyTodo = { ...todo }
        const copyTodos = [...todos]
        copyTodo.date = date
        copyTodo.day = day
        copyTodo.id = Math.random() * 10000
        copyTodos.push(copyTodo)
        setTodos(copyTodos)

        console.log(todos);
    }

    const handleRemoveTodos = (item) => {
        const copyTodos = [...todos]
        const filter = copyTodos.filter(f => f.id === item)
        setTodos(filter)
    }



    return (
        <MainContext.Provider value={{
            showSidebar,
            handleShowSidebar,
            activeTab,
            handleAcitveTab,
            todos,
            handleSetTodos,
            showFormAddTask,
            handleShowFormAddTask,
            handleRemoveTodos
        }}>
            <Navbar />
            <AddTask />
            {props.children}
        </MainContext.Provider>
    )
}

export default MainLayout