import React from 'react'
import Sidebar from 'components/sidebar/sidebar'
import TodoList from 'components/todo_list/todoList'

const App = () => {
    return (
        <div className='flex overflow-x-hidden '>
            <TodoList />
            <Sidebar />
        </div>
    )
}

export default App