import React from 'react'

export default props => (
    <div id="btn-dropdown" className="btn-group mx-2">
        <button className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">Ordenar por:</button>
        <div className="dropdown-menu dropdown-menu-left">
            <a className="dropdown-item" id="sortByID">ID</a>
            <a className="dropdown-item" id="sortByName">Nome</a>
            <a className="dropdown-item" id="sortByTakeback">Takeback</a>
        </div>
    </div>
)