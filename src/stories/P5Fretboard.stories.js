import React from 'react';
import { Sketch } from "react-p5"
import { storiesOf } from "@storybook/react"

import { Fretboard } from '../components/P5Fretboard';
import IndexPage from '../components';
const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (<IndexPage />)
    
})

