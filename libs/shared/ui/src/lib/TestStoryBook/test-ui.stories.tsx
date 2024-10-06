import type { Meta, StoryObj } from '@storybook/react';
import { TestUI } from './test-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TestUI> = {
  component: TestUI,
  title: 'TestUI',
};
export default meta;
type Story = StoryObj<typeof TestUI>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Hellollollo World/gi)).toBeTruthy();
  },
};
