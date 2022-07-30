import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TopThing from './TopBanner'

export default {
  title: 'Example/Landing',
  component: TopThing,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TopThing>

const Template: ComponentStory<typeof TopThing> = (args) => <TopThing />

export const TopBanner = Template.bind({})
