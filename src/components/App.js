import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamList from './streams/List.js'
import StreamShow from './streams/Show.js'
import StreamCreate from './streams/Create.js'
import StreamEdit from './streams/Edit.js'
import StreamDelete from './streams/Delete.js'
import Header from './Header'

const App = () => {
    return (
        <div className = "ui header">
            <BrowserRouter>
                <Header/>
                <Route path = "/" exact component = {StreamList}/>
                <Route path = "/streams/show" exact component = {StreamShow} />
                <Route path = "/streams/create" exact component = {StreamCreate}/>
                <Route path = "/streams/edit" exact component = {StreamEdit}/>
                <Route path = "/streams/delete" exact component = {StreamDelete} />
            </BrowserRouter>
        </div>
    )
}

export default App


