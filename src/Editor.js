import React, { Component, useState } from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { Controlled as CodeMirror } from "react-codemirror2"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
// import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

import useLocalStorage from "./hooks/useLocalStorage"


function Editor(props) {

    const {
        language,
        displayName,
        value,
        onChange
    } = props;

    const[open, setOpen]=useState(true);


    function handleChange(editor, data, value) {
        onChange(value)
    }
    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className="title">
                <h3>{displayName}</h3>
                <button 
                onClick={()=>setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt } />
                </button>
            </div>

            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className= "code-mirror-wrapper"
                options={{
                    mode:language,
                    theme:"material",
                    lineNumbers:true,
                    lineWrapping:true,
                    lint:true
                    
                }}
            />



        </div>
    )
}


export default Editor

