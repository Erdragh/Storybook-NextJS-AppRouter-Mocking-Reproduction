import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};