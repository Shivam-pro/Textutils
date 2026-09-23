import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>{props.title}</Link>
                    <Link to={'/aboutus'}>AboutUs</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className={props.show ? '' : 'btn-list'} id='btn'>
                            <button className={props.glow.id === "btn1" ? "colorbtn green glow" : "colorbtn green"} id='btn1' onClick={() => props.handle('btn1', "#0d620d")}></button>

                            <button className={props.glow.id === "btn2" ? "colorbtn yellow glow" : "colorbtn yellow"} id='btn2' onClick={() => props.handle("btn2", "#757516")}></button>

                            <button className={props.glow.id === "btn3" ? "colorbtn violet glow" : "colorbtn violet"} id='btn3' onClick={() => props.handle('btn3', '#521352')}></button>

                            <button className={props.glow.id === "btn4" ? "colorbtn orange glow" : "colorbtn orange"} id='btn4' onClick={() => props.handle('btn4', '#9c4f00')}></button>

                        </div>
                        <div className="form-check form-switch my-2 mx-3">
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}