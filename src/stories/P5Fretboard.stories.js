import React from 'react';
import { storiesOf } from "@storybook/react"
import { useState } from "react"
import IndexPage from '../components';
const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (<IndexPage />)
    
})
export default {
    title: 'Fretboard',
    component: IndexPage,
    argTypes: {
        numberOfFrets: { control: 'number' },
    },
  };
const Template = (args) => {

    return <IndexPage {...args} />;
}

export const Frets = Template.bind({});
Frets.args = {
  numberOfFrets: 23,
  label: 'frets',
};
