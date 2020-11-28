import React from 'react'

import { Button } from '../../components/Button/index'
import { TButton } from '../../components/Button/types'

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta

const Template: Story<TButton> = ({ size, type, children }: TButton) => (
    <Button size={size} type={type}>
        {children}
    </Button>
)

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button',
}
