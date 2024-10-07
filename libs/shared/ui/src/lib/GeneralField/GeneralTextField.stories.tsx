import { Meta, StoryObj } from '@storybook/react';
import { GeneralTextField, GeneralTextFieldProps } from './GeneralTextField';

const meta: Meta<GeneralTextFieldProps> = {
  title: 'Components/GeneralTextField',
  component: GeneralTextField,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['outlined', 'filled', 'standard'] },
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;

const Template: StoryObj<GeneralTextFieldProps> = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...',
    style: { width: '300px' },
  },
};

export const Default = Template;
