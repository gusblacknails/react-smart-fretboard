import React from 'react';
import { storiesOf } from "@storybook/react"
import { useState } from "react"
import IndexPage from '../components';
// const stories = storiesOf('App Test', module)

export default {
    title: 'Fretboard',
    component: IndexPage,
    argTypes: {
        numberOfFrets: { control: 'number' },
        scale: {control: 'string'},
        rootNote: { control: 'string'}
    },
  };
const Template = (args) => {

    return <IndexPage {...args} />;
}

export const Frets = Template.bind({});

Frets.args = {
  numberOfFrets: 20,
  choosenScale: "minor",
  // rootNote only works with minorCase
  root: "cb4", 
  label: 'frets',
};
