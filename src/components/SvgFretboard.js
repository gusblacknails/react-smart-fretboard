// " fix window" is not available during server side rendering. from this file and react-p5 library before uncomment



import React from "react"
import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import { Sketch } from "react-p5"
import { SVG } from '@svgdotjs/svg.js'
import { Scale } from "@tonaljs/tonal";


const SvgFretboard = ({props,numberOfFrets, ...args}) =>{
    
    const fretboardHeigth = 200
    const [fretboardWidth, setFretboardWidth] = useState(1500);
    const tuning = ["E", "B", "G", "D", "A", "E"]
    const numberOfStrings= tuning.length
    const [frets, setFrets] = useState(numberOfFrets);
    const stringSpinColor = "#E9E3DF"
    let isFlat = true;
    const firstStringsSpinColor = "#A6A6A6"
    const stringSpinShadow = "#222222"
    const nutColor = "#E3E5E5"
    const tonicColor = "orange"
    const nutWidth = 10
    const fretsColor = "#A6A6A6"
    const noteColor = "gray"
    const electricGuitarStrings = true
    const ParentBackgroundColor = "white";
    const neckColor = "#534441"
    const chromaticScaleSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const chromaticScaleFlat = [ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
    const scaleWithoutAccidentals = ["C", "D", "E", "F", "G", "A", "B"]
    let lastFretWidth
    const [scale, setScale] = useState('blues');
    const [rootNote, setRootNote] = useState('a4');
    const dots = true
    const sc = fretboardWidth
    const mn = 17.817
    const fretboardScale = parseFloat(sc)
    const magic = parseFloat(mn)
    const fretHeigth = fretboardHeigth / numberOfStrings
  
    
    const fretSizeCalculator = (fretboardScale, magic_constant, frets) => {
     
        let fretMesures = []
        let acumulatedFretSize = fretboardScale / magic_constant
        fretMesures.push(acumulatedFretSize)
        for(let i= 1; i<frets; i++) {
            const mesure = (fretboardScale - acumulatedFretSize ) / magic_constant
            fretMesures.push(mesure)
            acumulatedFretSize += mesure
        }
        return  [ fretMesures, acumulatedFretSize ]    
    }
    let fretSizes = fretSizeCalculator(fretboardScale, magic, frets)
    const shiftedChromaticScale = () => {
        if (rootNote[1]==="b"){
            isFlat =true
        }
        if (rootNote[1]==="#"){
            isFlat =false
        }
        let chromaticScale = isFlat ? chromaticScaleFlat : chromaticScaleSharp 
        let stringsArray= []
        for(let i = 0; i<numberOfStrings; i++){  
            
            while(chromaticScale[0]!==tuning[i]){
                chromaticScale.push(chromaticScale.shift()); 

            }
              
            stringsArray.push(chromaticScale.slice(0) )
        }
        
        return stringsArray
    }
    let shifted = shiftedChromaticScale() 
    
    const chromaticNotesPerString = (numberOfStrings, frets, shifted) => {
        let chromaticArray = []   
        
        for(let i = 0; i<numberOfStrings; i++){
            let stringArray = []
            for(let e = 0; e<=frets; e++){
                shifted[e]!=undefined ? stringArray.push(shifted[e])  : stringArray.push(shifted[(e % shifted.length)]) 
            } 
            chromaticArray.push(stringArray)
        }
        return chromaticArray

    }
    const cleanDoubleAccidentals = (note) => {
        
        if(note.length === 2) {
            return note
        }
        if(note.length === 3){
            if(note[0]==="E" && note[1] === "#"){
                note = `F${note[note.length - 1]}`
            }
            if(note[0]==="B" && note[1] === "#"){

                note = `C${note[note.length - 1]}`
            }
            if(note[0]==="F" && note[1] === "b"){
                note = `E${note[note.length - 1]}`
            }
            if(note[0]==="C" && note[1] === "b"){

                note = `B${note[note.length - 1]}`
            }
            return note

        }
        if(note.length === 4){
            if (note[1] === "b" && note[2] === "b"){
                for( let e = 0; e<= scaleWithoutAccidentals.length; e++){
                    if( note[0]===scaleWithoutAccidentals[e] || note[0]===scaleWithoutAccidentals[e % scaleWithoutAccidentals.length]){
                        return scaleWithoutAccidentals[(e % scaleWithoutAccidentals.length) - 1] + note[note.length - 1]
                    }
                    
                }
            }
            if (note[1] === "#" && note[2] === "#"){
                for( let e = 0; e<= scaleWithoutAccidentals.length; e++){
                    if( note[0]===scaleWithoutAccidentals[e] || note[0]===scaleWithoutAccidentals[e % scaleWithoutAccidentals.length]){
                        return scaleWithoutAccidentals[(e % scaleWithoutAccidentals.length) + 1] + note[note.length - 1]
                    }
                    
                }

            }
            
        }
    }
    const notesPerString = (scale, rootNote,  numberOfStrings, frets, shifted) => {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        rootNote =  capitalizeFirstLetter(rootNote) 
        const scaleInfo = Scale.get(`${rootNote} ${scale}`)
        let notesWithoutDoubleAccidentals =  []
        scaleInfo.notes.forEach( (note) => {
           
            note = cleanDoubleAccidentals(note)
            notesWithoutDoubleAccidentals.push(note)
           
        })
        const cleanNotes = notesWithoutDoubleAccidentals.map( note => { 
            return note.substring(0, note.length - 1)
        }) 
        let chromatic = chromaticNotesPerString( numberOfStrings, frets, shifted)
        let scaleOnFretboard = []  
       
        for(let i = 0; i<numberOfStrings; i++){
            let stringArray = []
           
            for(let e = 0; e<=frets; e++){
               let notFound = true
                cleanNotes.forEach((note)=>{
                        if(notFound){
                            if(note===chromatic[0][i][e] || note===chromatic[0][i][(e % chromatic[0][i].length)] ){
                                chromatic[0][i][e]!=undefined ? stringArray.push(chromatic[0][i][e])  : stringArray.push(chromatic[0][i][(e % chromatic[0][i].length)]) 
                                notFound = false
                            }
                        }
                              
                })
                
                if(notFound){
                    stringArray.push(null)
                }

            } 
            scaleOnFretboard.push(stringArray.slice(0))
            
        }

        return scaleOnFretboard
        
    }
    
    let scaleOnFretboard = notesPerString(scale, rootNote,  numberOfStrings, frets, shifted)
    console.log(scaleOnFretboard)
    
    function fretboardDraw(){
        let correctFretboardSize = 0
        fretSizes[0].forEach (function(num){
            correctFretboardSize += num;
        });
    
        let draw = SVG().addTo('body').size(correctFretboardSize + fretSizes[0][fretSizes[0].length - 1] ,
            fretboardHeigth)
    
        let backgroundShape = draw.rect(correctFretboardSize + fretSizes[0][fretSizes[0].length - 1] ,
            fretboardHeigth).fill(neckColor)
        var group = draw.group()
        group.add(backgroundShape)
        return <group/>
    }
  
    return fretboardDraw()



}

SvgFretboard.propTypes = {
    numberOfFrets: PropTypes.number
}
SvgFretboard.defaultProps = {
    numberOfFrets: 23, 
  };
export default SvgFretboard

