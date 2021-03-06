import React from 'react'
import classes from "./Modal.module.css"
import { Fragment } from 'react'
import ReactDom  from 'react-dom'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>

}
const ModelOverlay=(props)=>{
    return <div className={classes.modal}>
         <div className={classes.content}>{props.children}</div>

    </div>
   
}

const portalElement=document.getElementById('overlays')

function Model(props) {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />,portalElement)}
           {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
        </Fragment>
    )
}

export default Model
