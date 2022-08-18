import React from 'react'
import Sidebar from 'components/sidebar/sidebar'
import TodoList from 'components/todo_list/todoList'

const App = () => {

    // const todos = JSON.parse(localStorage.getItem("todos"))
    // const m = moment()
    // const day = m.locale("fa").format("DD");

    // useEffect(() => {
    //     if (todos !== null) {
    //         const filter = todos.filter(f => +convertNumber(f.day) !== +day - 1)
    //         localStorage.setItem("todos", filter)
    //     }
    // }, [day , todos])

    return (
        <div className='flex overflow-x-hidden '>
            <TodoList />
            <Sidebar />
        </div>
    )
}

export default App