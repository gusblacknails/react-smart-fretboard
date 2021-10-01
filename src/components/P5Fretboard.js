// " fix window" is not available during server side rendering. from this file and react-p5 library before uncomment



import React from "react"
import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import Sketch from "react-p5"
import { Scale } from "@tonaljs/tonal";

const Fretboard = ({props,numberOfFrets, ...args}) =>{
    
    const fretboardHeigth = 200
    const [fretboardWidth, setFretboardWidth] = useState(window.innerWidth);
    const tuning = ["E", "B", "G", "D", "A", "E"]
    const numberOfStrings= tuning.length
    const [frets, setFrets] = useState(numberOfFrets);
    const stringSpinColor = "#E9E3DF"
    const [isFlat, setIsFlat] = useState(true);
    const firstStringsSpinColor = "#A6A6A6"
    const stringSpinShadow = "#222222"
    const nutColor = "#E3E5E5"
    const nutWidth = 10
    const fretsColor = "#A6A6A6"
    const noteColor = "gray"
    const electricGuitarStrings = true
    const ParentBackgroundColor = "white";
    const neckColor = "#534441"
    const chromaticScaleSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const chromaticScaleFlat = [ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
    let lastFretWidth
    const [scale, setScale] = useState('major');
    const [rootNote, setRootNote] = useState('Db4');
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
            let mesure = (fretboardScale - acumulatedFretSize ) / magic_constant
            fretMesures.push(mesure)
            acumulatedFretSize += mesure
        }
        
        return  [ fretMesures, acumulatedFretSize ]
        
    }
    let fretSizes = fretSizeCalculator(fretboardScale, magic, frets)
    
    const chromaticNotesByString = (tuning, numberOfStrings, frets) => {
        let chromaticArray = []
        let chromaticScale = isFlat ? chromaticScaleFlat : chromaticScaleSharp    
        for(let i = 0; i<numberOfStrings; i++){
            
            let stringArray = []
            while(chromaticScale[0]!==tuning[i]){
                chromaticScale.push(chromaticScale.shift());
                
            }
            
            for(let e = 0; e<=frets; e++){
                if(chromaticScale[e]!=undefined){
                    stringArray.push(chromaticScale[e])  
                }
                else{
                    console.log(e % chromaticScale.length)
                    stringArray.push(chromaticScale[(e % chromaticScale.length)])  
                }
            } 
            chromaticArray.push(stringArray)
    
        }
        console.log( chromaticArray)
        return chromaticArray

    }
    const notesPerString = (scale, rootNote, tuning, numberOfStrings, frets) => {
        let scaleInfo = Scale.get(`${rootNote} ${scale}`)
        let notesArray = []
        console.log("SCALE:", scaleInfo)
        let chromatic = chromaticNotesByString(tuning, numberOfStrings, frets)
        
    }
    notesPerString(scale, rootNote, tuning, numberOfStrings, frets)

    let setup = (p5, canvasParentRef) => {
        let correctFretboardSize = 0
        fretSizes[0].forEach (function(numero){
            correctFretboardSize += numero;
        });
        p5.createCanvas(
            correctFretboardSize + fretSizes[0][fretSizes[0].length - 1] ,
            fretboardHeigth
        ).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
        p5.background(neckColor)
        p5.noLoop()
        
    }
    
    let draw = p5 => {
        
        function drawFret(
            x,
            y,
            z,
            fretHeigth,
            fretboardHeigth,
            fretNumber,
            nutColor,
            fretsColor
        ) {
           
            //INSTRUMENT FRETS
            let shadow = p5.color("black")
            shadow.setAlpha(100)
            p5.stroke(shadow)
            p5.strokeWeight(1)
            let squareColor = p5.color("black")
            squareColor.setAlpha(100)
           
            if (fretNumber === 0) {
                
                p5.fill(nutColor)
                p5.rect(y , 0, nutWidth, fretboardHeigth)
              
            } else {
                p5.fill(fretsColor)
                p5.rect(y, 0, 3, fretboardHeigth)
                p5.stroke(squareColor)
                p5.strokeWeight(0.8)
                p5.line(y + 2, 2, y + 2, fretboardHeigth - 2)
            }

            p5.noStroke()
        }

        function drawNote(
            noteColor,
            positionHeigth,
            positionWidth,
            fretWidth,
            fretHeigth,
            lastFretWidth
        ) {
            p5.fill(noteColor)
            p5.circle(
                positionWidth - fretWidth / 2 + 1,
                positionHeigth - fretHeigth / 2,
                lastFretWidth
            )
        }
        function drawDots(fretboardHeigth, fretNumber, positionWidth, fretWidth) {
            if (
                fretNumber === 3 ||
                fretNumber === 5 ||
                fretNumber === 7 ||
                fretNumber === 9 ||
                fretNumber === 15 ||
                fretNumber === 17 ||
                fretNumber === 19
            ) {
                p5.fill("white")
                p5.circle(positionWidth - fretWidth / 2, fretboardHeigth / 2, 10)
            }
            if (fretNumber === 12) {
                p5.fill("white")
                p5.circle(positionWidth - fretWidth / 2, fretboardHeigth / 3, 10)
                p5.circle(
                    positionWidth - fretWidth / 2,
                    fretboardHeigth - fretboardHeigth / 3,
                    10
                )
            }
        }

        function fretboardDraw(){
            p5.translate(nutWidth,0)
            let positionHeigth = fretHeigth

            for (var i = 0; i < numberOfStrings; i += 1) {
                
                let positionWidth = lastFretWidth
                let fretNumber = 0

                for (var e = 0; e < frets; e++) {
                    lastFretWidth = fretSizes[0][e]
                    drawFret(
                        fretSizes[0][e],
                        positionWidth ,
                        positionHeigth,
                        fretHeigth,
                        fretboardHeigth,
                        fretNumber,
                        nutColor,
                        fretsColor
                    )

                    // NECK DOTS
                    if (dots) {
                        drawDots(fretboardHeigth, fretNumber, positionWidth, fretSizes[0][e])
                    }

                    positionWidth += fretSizes[0][e]
                    fretNumber += 1
                }

                positionHeigth += fretHeigth
            }

        }
        fretboardDraw()
        
        let positionHeigth = fretHeigth
        //INSTRUMENT STRINGS
        for (var i = 0; i < numberOfStrings; i += 1) {
            p5.fill(stringSpinShadow)
            p5.rect(
                0 - nutWidth,
                positionHeigth - fretHeigth / 2,
                fretboardWidth,
                1 + i / 3
            )
            if (electricGuitarStrings) {
                if (i > 1) {
                    for (var spin = 0; spin < fretboardScale; spin += 1.2) {
                        p5.fill(stringSpinColor)
                        p5.rect(spin - nutWidth, positionHeigth - fretHeigth / 2, 1, 1 + i / 3)
                    }
                } else {
                    for (var spin = 0; spin < fretboardScale; spin += 1.1) {
                        p5.fill(firstStringsSpinColor)
                        p5.rect(spin - nutWidth, positionHeigth - fretHeigth / 2, 1, 1 + i / 3)
                    }
                }
            }

            positionHeigth += fretHeigth
        }
        // fretboard angle
        p5.fill(ParentBackgroundColor)
        p5.triangle(0 - nutWidth, 8, 0 - nutWidth, 0, fretboardWidth, 0);
        p5.translate(0, fretboardHeigth)
        p5.triangle(0 -nutWidth, -8, 0 - nutWidth, 0, fretboardWidth, 0);
        p5.translate(0, -fretboardHeigth)

        positionHeigth = fretHeigth
        for (var i = 0; i < numberOfStrings; i++) {
            let positionWidth = lastFretWidth
            let noteRadious
            if (fretHeigth > lastFretWidth) {
                noteRadious = lastFretWidth
            }else{
                noteRadious = fretHeigth
            }
            for (var e = 0; e < frets + 1; e += 1) {
                if(e === 0){
                    drawNote(
                        noteColor,
                        positionHeigth,
                        positionWidth ,
                        fretSizes[0][e]/2,
                        fretHeigth,
                        noteRadious
                    )
                }
                else{
                    
                    drawNote(
                        noteColor,
                        positionHeigth,
                        positionWidth,
                        fretSizes[0][e],
                        fretHeigth,
                        noteRadious 
                    )  
                }
               

                positionWidth += fretSizes[0][e]
            }

            positionHeigth += fretHeigth
        }
        
       
    }
  
    
return <Sketch setup={setup} draw={draw} style={{textAlign: 'center'}} />
    
}
Fretboard.propTypes = {
    numberOfFrets: PropTypes.number
}
Fretboard.defaultProps = {
    numberOfFrets: 23,
    
  };
export default Fretboard

