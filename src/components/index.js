
import React from "react"

import Fretboard from "./P5Fretboard"
import SvgFretboard from "./SvgFretboard"

const IndexPage = ({...args}) => {
    return (
    <React.Fragment>
            <Fretboard {...args}/>
            {/* <SvgFretboard {...args}/> */}
    </React.Fragment>
   
        )
}

export default IndexPage
