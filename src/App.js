import React from 'react'
import Main from 'components/main/main'
import Sidebar from 'components/sidebar/sidebar'

const App = () => {
    return (
        <div className='flex overflow-x-hidden '>
            <Main />
            <Sidebar />
        </div>
    )
}

export default App