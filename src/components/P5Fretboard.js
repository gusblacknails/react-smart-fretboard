// " fix window" is not available during server side rendering. from this file and react-p5 library before uncomment



import React from "react"
import Sketch from "react-p5"

export default function Fretboard(){
    const frets = 23
    const fretboardHeigth = 200

    // fretboardWidth = window.innerWidth
    const fretboardWidth = '1500'
    const numberOfStrings = 6
    const stringSpinColor = "#E9E3DF"
    const firstStringsSpinColor = "#A6A6A6"
    const stringSpinShadow = "#222222"
    const nutColor = "white"
    const fretsColor = "#A6A6A6"
    const noteColor = "gray"
    const electricGuitarStrings = true
    const neckColor = "#534441"
    const tuning = ["e", "b", "g", "d", "a", "e"]
    const notes = []
    let lastFretWidth

    const dots = true
    const sc = fretboardWidth
    const mn = 17.817
    const scale = parseFloat(sc)
    const magic = parseFloat(mn)
    const fretHeigth = fretboardHeigth / numberOfStrings


    const fretSizeCalculator = (scale, magic_constant, frets) => {
        let fretMesures = []
        let acumulatedFretSize = scale / magic_constant
        fretMesures.push(acumulatedFretSize)
        for(let i= 1; i<frets; i++) {
            let mesure = (scale - acumulatedFretSize ) / magic_constant
            fretMesures.push(mesure)
            acumulatedFretSize += mesure
        }
        
        return fretMesures
        
    }
    let fretSizes = fretSizeCalculator(scale, magic, frets)


    let setup = (p5, canvasParentRef) => {
        p5.createCanvas(
            fretboardWidth - fretboardWidth / 3.6,
            fretboardHeigth
            // p5.windowWidth / 8,
            // p5.windowHeight / 5.9
            // ,p5.WEBGL
        ).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
        p5.background(neckColor)

        p5.noLoop()

    }
    
    let draw = p5 => {
        // p5.translate(-p5.width / 2, -p5.height / 2, 0)

        function drawFrets(
            x,
            y,
            z,
            fretHeigth,
            fretboardHeigth,
            fretNumber,
            nutColor,
            fretsColor
        ) {
            // FRET SQUARES
            // p5.noStroke()
            // p5.fill(255, 204, 0)
            // p5.rect(y, z, x, fretHeigth)

            //INSTRUMENT FRETS
            let shadow = p5.color("black")
            shadow.setAlpha(100)
            p5.stroke(shadow)
            p5.strokeWeight(1)
            let squareColor = p5.color("black")
            squareColor.setAlpha(100)
            // p5.noStroke()
            if (fretNumber === 0) {
                p5.fill(nutColor)
                p5.rect(y, 0, 10, fretboardHeigth)
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

        // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes

        let positionHeigth = fretHeigth

        for (var i = 0; i < numberOfStrings; i += 1) {
            
            let positionWidth = 0
            let fretNumber = 0

            for (var e = 0; e < frets; e++) {
                lastFretWidth = fretSizes[e]
                drawFrets(
                    fretSizes[e],
                    positionWidth,
                    positionHeigth,
                    fretHeigth,
                    fretboardHeigth,
                    fretNumber,
                    nutColor,
                    fretsColor
                )

                // NECK DOTS
                if (dots) {
                    drawDots(fretboardHeigth, fretNumber, positionWidth, fretSizes[e])
                }

                positionWidth += fretSizes[e]
                fretNumber += 1
            }

            positionHeigth += fretHeigth
        }
        positionHeigth = fretHeigth
        //INSTRUMENT STRINGS
        for (var i = 0; i < numberOfStrings; i += 1) {
            p5.fill(stringSpinShadow)
            p5.rect(
                0,
                positionHeigth - fretHeigth / 2,
                fretboardWidth,
                1 + i / 3
            )
            if (electricGuitarStrings) {
                if (i > 1) {
                    for (var spin = 0; spin < scale; spin += 1.2) {
                        p5.fill(stringSpinColor)
                        p5.rect(spin, positionHeigth - fretHeigth / 2, 1, 1 + i / 3)
                    }
                } else {
                    for (var spin = 0; spin < scale; spin += 1.1) {
                        p5.fill(firstStringsSpinColor)
                        p5.rect(spin, positionHeigth - fretHeigth / 2, 1, 1 + i / 3)
                    }
                }
            }

            positionHeigth += fretHeigth
        }

        positionHeigth = fretHeigth
        for (var i = 0; i < numberOfStrings; i += 1) {
            let positionWidth = 0
            // console.log("this", this["fr" + i])
            for (var e = 0; e < frets + 1; e += 1) {
                
                drawNote(
                    noteColor,
                    positionHeigth,
                    positionWidth,
                    fretSizes[e],
                    fretHeigth,
                    lastFretWidth - 3
                )

                positionWidth += fretSizes[e]
            }

            positionHeigth += fretHeigth
        }
    }

    
return <Sketch setup={setup} draw={draw} style={{textAlign: 'center'}}/>
    
}
