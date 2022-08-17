import React, { useEffect, useState } from 'react'
import Navbar from 'components/navigation/navbar'
import MainContext from 'context/MainContext'
import AddTask from 'components/add_task/addTask'
import moment from 'jalali-moment'
import { convertNumber } from 'utils/convertNumber'

const MainLayout = (props) => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [activeTab, setAcitveTab] = useState([true, false])
    const [showFormAddTask, setShowFormAddTask] = useState(false)
    const [todos, setTodos] = useState([])
    const [todyTasks, setTodyTasks] = useState([])


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

        localStorage.setItem("todos", JSON.stringify(copyTodos))
        handleTodyTasks()
    }

    const handleRemoveTodos = (id) => {
        const copyTodos = [...todos]
        const filter = copyTodos.filter(f => f.id !== +id)
        setTodos(filter)
        localStorage.setItem("todos", JSON.stringify(filter))
        handleTodyTasks()
    }

    const handleTodyTasks = () => {
        const todos = JSON.parse(localStorage.getItem('todos'))
        const m = moment();
        const day = m.locale("fa").format("DD");
        const filter = todos.filter(f => day === convertNumber(f.day))
        setTodyTasks(filter)
    }

    useEffect(() => {
        handleTodyTasks()
    }, [])

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
            handleRemoveTodos,
            todyTasks,
            handleTodyTasks
        }}>
            <Navbar />
            <AddTask />
            {props.children}
        </MainContext.Provider>
    )
}

export default MainLayout