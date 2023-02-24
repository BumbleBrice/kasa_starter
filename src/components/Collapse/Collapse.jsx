import React, { useState } from 'react'
import './collapse.css'
import upArrow from '../../images/arrows/upArrow.png'
import downArrow from '../../images/arrows/downArrow.png'

// Affichage des collapse des pages logement et à propos
export default function Collapse (props) {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
       
    )
}