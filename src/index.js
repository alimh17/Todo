import { createRoot } from 'react-dom/client'

import MainLayout from './components/ui/main.layout'
import App from './app'


import "./index.css"
import 'react-vertical-timeline-component/style.min.css';

const container = document.getElementById("root")
const root = createRoot(container)


root.render(
    <MainLayout>
        <App tab="home" />
    </MainLayout>
)