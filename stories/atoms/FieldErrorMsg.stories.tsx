import FieldErrorMsg from '@/components/atoms/FieldErrorMsg';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'atoms/FieldErrorMsg',
    component: FieldErrorMsg,
} satisfies Meta<typeof FieldErrorMsg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: '이메일 주소를 입력해 주세요.',
    },
};
