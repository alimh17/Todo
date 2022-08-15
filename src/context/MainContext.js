const { createContext } = require("react");

const MainContext = createContext({
    //* --------------------- Dispaly sidebar --------------------------
    showSidebar: false,
    handleShowSidebar: () => { },

    //* --------------------- Active Tab ------------------------------
    activeTab: [],
    handleAcitveTab: () => { },

    //* -------------------- Display add task form --------------------
    showFormAddTask: false,
    handleShowFormAddTask: () => { },

    //* ---------------------Todo Lists -------------------------------
    todos: [],
    handleSetTodos: () => { },
    handleRemoveTodos: () => { }

})



export default MainContext