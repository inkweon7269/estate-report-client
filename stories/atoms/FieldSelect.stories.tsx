import { Meta, StoryObj } from '@storybook/react';
import FieldSelect from '@/components/atoms/FieldSelect';
import { useForm } from 'react-hook-form';
import FieldRadio from '@/components/atoms/FieldRadio';

const meta = {
    title: 'atoms/FieldSelect',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
    component: FieldSelect,
} satisfies Meta<typeof FieldSelect>;

export default meta;

type Story = StoryObj<typeof FieldSelect>;

export const Default: Story = {
    args: {
        label: '성별',
        name: 'gender',
        options: [
            { label: '남', value: 'male' },
            { label: '여', value: 'female' },
        ],
        placeholder: '성별',
    },
    render: function Render(args) {
        const { control } = useForm();
        return <FieldSelect {...args} control={control} />;
    },
};
