import React from 'react';
import { useParams } from 'react-router-dom'
import { dataLodgings } from '../../datas/dataLodgings'
import Error from '../Error/Error'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import LodgingDetails from '../../components/LodgingDetails/LodgingDetails'
import Collapse from '../../components/Collapse/Collapse'
import './lodging.css'

// Affichage des composants des pages logement
export default function HousingPage() {

    let { id } = useParams()
   

    if (!lodging) {
        return <Error/>
    } else {

        return (
          
        )
    }
}