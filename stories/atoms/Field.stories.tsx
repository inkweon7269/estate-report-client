import { Meta, StoryObj } from '@storybook/react';
import FieldInput from '@/components/atoms/FieldInput';
import { useForm } from 'react-hook-form';

const meta = {
    title: 'atoms/FieldInput',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    component: FieldInput,
} satisfies Meta<typeof FieldInput>;

export default meta;

type Story = StoryObj<typeof FieldInput>;

export const Default: Story = {
    args: {
        label: '이메일',
        name: 'email',
        type: 'text',
        placeholder: '이메일을 입력해 주세요.',
    },
    render: function Render(args) {
        const { control } = useForm();
        return <FieldInput {...args} control={control} />;
    },
};
