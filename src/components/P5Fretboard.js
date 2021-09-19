// " fix window" is not available during server side rendering. from this file and react-p5 library before uncomment



import React, { Component } from "react"
import Sketch from "react-p5"

export default function Fretboard(){
    const frets = 22
    const fretboardHeigth = 200

    // fretboardWidth = window.innerWidth
    const fretboardWidth = '1500'
    const numberOfStrings = 6
    const stringSpinColor = "#E9E3DF"
    const firstStringsSpinColor = "#A6A6A6"
    const stringSpinShadow = "#222222"
    const nutColor = "white"
    const fretsColor = "#A6A6A6"
    const noteColor = "red"
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

    let fr1 = scale / magic
    let fr2 = (scale - fr1) / magic
    let fr3 = (scale - (fr1 + fr2)) / magic
    let fr4 = (scale - (fr1 + fr2 + fr3)) / magic
    let fr5 = (scale - (fr1 + fr2 + fr3 + fr4)) / magic
    let fr6 =
        (scale - (fr1 + fr2 + fr3 + fr4 + fr5)) /
        magic
    let fr7 =
        (scale -
            (fr1 + fr2 + fr3 + fr4 + fr5 + fr6)) /
        magic
    let fr8 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7)) /
        magic
    let fr9 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8)) /
        magic
    let fr10 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9)) /
        magic
    let fr11 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10)) /
        magic
    let fr12 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11)) /
        magic
    let fr13 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12)) /
        magic
    let fr14 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13)) /
        magic
    let fr15 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14)) /
        magic
    let fr16 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15)) /
        magic
    let fr17 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16)) /
        magic
    let fr18 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17)) /
        magic
    let fr19 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17 +
                fr18)) /
        magic
    let fr20 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17 +
                fr18 +
                fr19)) /
        magic
    let fr21 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17 +
                fr18 +
                fr19 +
                fr20)) /
        magic
    let fr22 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17 +
                fr18 +
                fr19 +
                fr20 +
                fr21)) /
        magic
    let fr23 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17 +
                fr18 +
                fr19 +
                fr20 +
                fr21 +
                fr22)) /
        magic
    let fr24 =
        (scale -
            (fr1 +
                fr2 +
                fr3 +
                fr4 +
                fr5 +
                fr6 +
                fr7 +
                fr8 +
                fr9 +
                fr10 +
                fr11 +
                fr12 +
                fr13 +
                fr14 +
                fr15 +
                fr16 +
                fr17 +
                fr18 +
                fr19 +
                fr20 +
                fr21 +
                fr22 +
                fr23)) /
        magic

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

        function drawNotes(
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
            // let positionWidth = fr1
            let positionWidth = 0
            let fretNumber = 0

            for (var e = 0; e < frets + 1; e += 1) {
                let fretWidth = fr1
                if (e === 1) {
                    fretWidth = fr2
                }
                if (e === 2) {
                    fretWidth = fr3
                }
                if (e === 3) {
                    fretWidth = fr4
                }
                if (e === 4) {
                    fretWidth = fr5
                }
                if (e === 5) {
                    fretWidth = fr6
                }
                if (e === 6) {
                    fretWidth = fr7
                }
                if (e === 7) {
                    fretWidth = fr8
                }
                if (e === 8) {
                    fretWidth = fr9
                }
                if (e === 9) {
                    fretWidth = fr10
                }
                if (e === 10) {
                    fretWidth = fr11
                }
                if (e === 11) {
                    fretWidth = fr12
                }
                if (e === 12) {
                    fretWidth = fr13
                }
                if (e === 13) {
                    fretWidth = fr14
                }
                if (e === 14) {
                    fretWidth = fr15
                }
                if (e === 15) {
                    fretWidth = fr16
                }
                if (e === 16) {
                    fretWidth = fr17
                }
                if (e === 17) {
                    fretWidth = fr18
                }
                if (e === 18) {
                    fretWidth = fr19
                }
                if (e === 19) {
                    fretWidth = fr20
                }
                if (e === 20) {
                    fretWidth = fr21
                }
                if (e === 21) {
                    fretWidth = fr22
                }
                if (e === 22) {
                    fretWidth = fr23
                }
                if (e === 23) {
                    fretWidth = fr24
                }
                lastFretWidth = fretWidth
                drawFrets(
                    fretWidth,
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
                    drawDots(fretboardHeigth, fretNumber, positionWidth, fretWidth)
                }

                positionWidth += fretWidth
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
                let fretWidth = fr1

                if (e === 1) {
                    fretWidth = fr2
                }
                if (e === 2) {
                    fretWidth = fr3
                }
                if (e === 3) {
                    fretWidth = fr4
                }
                if (e === 4) {
                    fretWidth = fr5
                }
                if (e === 5) {
                    fretWidth = fr6
                }
                if (e === 6) {
                    fretWidth = fr7
                }
                if (e === 7) {
                    fretWidth = fr8
                }
                if (e === 8) {
                    fretWidth = fr9
                }
                if (e === 9) {
                    fretWidth = fr10
                }
                if (e === 10) {
                    fretWidth = fr11
                }
                if (e === 11) {
                    fretWidth = fr12
                }
                if (e === 12) {
                    fretWidth = fr13
                }
                if (e === 13) {
                    fretWidth = fr14
                }
                if (e === 14) {
                    fretWidth = fr15
                }
                if (e === 15) {
                    fretWidth = fr16
                }
                if (e === 16) {
                    fretWidth = fr17
                }
                if (e === 17) {
                    fretWidth = fr18
                }
                if (e === 18) {
                    fretWidth = fr19
                }
                if (e === 19) {
                    fretWidth = fr20
                }
                if (e === 20) {
                    fretWidth = fr21
                }
                if (e === 21) {
                    fretWidth = fr22
                }
                if (e === 22) {
                    fretWidth = fr23
                }
                if (e === 23) {
                    fretWidth = fr24
                }

                drawNotes(
                    noteColor,
                    positionHeigth,
                    positionWidth,
                    fretWidth,
                    fretHeigth,
                    lastFretWidth - 3
                )

                positionWidth += fretWidth
            }

            positionHeigth += fretHeigth
        }
    }

    
return <Sketch setup={setup} draw={draw} />
    
}
