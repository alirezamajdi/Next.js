import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import '../../../styles/components/button.css'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = (args: ButtonProps) => <Template {...args} />
Primary.args = {
  label: 'Rent now',
  mode: 'primary',
}

export const Outline = (args: ButtonProps) => <Template {...args} />
Outline.args = {
  label: 'Rent now',
  mode: 'outline',
}

export const Large = (args: ButtonProps) => <Template {...args} />
Large.args = {
  size: 'large',
  label: 'Rent now',
}

export const Largest = (args: ButtonProps) => <Template {...args} />
Largest.args = {
  size: 'largest',
  label: 'Rent now',
}

export const Listing = (args: ButtonProps) => <Template {...args} />
Listing.args = {
  label: 'Button',
  icon: 'listing',
}

export const Right = (args: ButtonProps) => <Template {...args} />
Right.args = {
  label: 'Button',
  icon: 'right',
  icon_align: 'right',
}
