import { Meta, StoryObj } from '@storybook/react';
import FieldTextArea from '@/components/atoms/FieldTextArea';
import { useForm } from 'react-hook-form';

const meta = {
    title: 'atoms/FieldTextArea',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    component: FieldTextArea,
} satisfies Meta<typeof FieldTextArea>;

export default meta;

type Story = StoryObj<typeof FieldTextArea>;

export const Default: Story = {
    args: {
        label: '자기소개',
        name: 'intro',
        placeholder: '50자 이내로 작성해 주세요.',
        style: { resize: 'none' },
    },
    render: function Render(args) {
        const { control } = useForm();
        return <FieldTextArea {...args} control={control} />;
    },
};
