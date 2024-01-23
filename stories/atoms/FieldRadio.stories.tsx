import FieldRadio from '@/components/atoms/FieldRadio';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

const meta = {
    title: 'atoms/FieldRadio',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    component: FieldRadio,
} satisfies Meta<typeof FieldRadio>;

export default meta;

type Story = StoryObj<typeof FieldRadio>;

export const Default: Story = {
    args: {
        label: '성별',
        name: 'gender',
        options: [
            { label: '남', value: 'male' },
            { label: '여', value: 'female' },
        ],
    },
    render: function Render(args) {
        const { control } = useForm();
        return <FieldRadio {...args} control={control} />;
    },
};
