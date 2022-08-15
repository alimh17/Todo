const { createContext } = require("react");

const MainContext = createContext({
    //* --------------------- Dispaly sidebar --------------------------
    showSidebar: false,
    handleShowSidebar: () => { },

    //* --------------------- Active Tab ------------------------------
    activeTab: [],
    handleAcitveTab: () => { }

})



export default MainContext