import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamList from './streams/List.js'
import StreamShow from './streams/Show.js'
import StreamCreate from './streams/Create.js'
import StreamEdit from './streams/Edit.js'
import StreamDelete from './streams/Delete.js'
import history from '../history'
import Header from './Header'
//Test
const App = () => {
    return (
        <div className = "ui header">
            <Router history = {history}>
                <Header/>
                <Route path = "/" exact component = {StreamList}/>
                <Route path = "/streams/show" exact component = {StreamShow} />
                <Route path = "/streams/create" exact component = {StreamCreate}/>
                <Route path = "/streams/edit/:id" exact component = {StreamEdit}/>
                <Route path = "/streams/delete/:id" exact component = {StreamDelete} />
            </Router>
        </div>
    )
}

export default App


