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
    },
  };
const Template = (args) => {

    return <IndexPage {...args} />;
}

export const Frets = Template.bind({});
Frets.args = {
  numberOfFrets: 19,
  label: 'frets',
};
