// app/javascript/packs/components/TodoApp.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import {createRoot} from 'react-dom/client'

class TodoApp extends React.Component {
    render() {
        return <p>TodoApp</p>
    }
}

document.addEventListener('turbolinks:load', () => {
    const container = document.getElementById('todo-app')
    const root = createRoot(container)
    root.render(<TodoApp />)
    {/*app && ReactDOM.render(<TodoApp />, app)*/}
})