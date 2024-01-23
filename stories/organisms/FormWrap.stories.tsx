import FormWrap from '@/stories/organisms/FormWrap';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'organisms/FormWrap',
    parameters: {
        layout: 'centered',
    },
    component: FormWrap,
} satisfies Meta<typeof FormWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
