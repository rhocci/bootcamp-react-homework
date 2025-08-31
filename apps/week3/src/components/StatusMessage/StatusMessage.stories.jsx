import { DefaultStatusMessage } from './StatusMessage.jsx';

export default {
  title: 'Components/StatusMessage',
  component: DefaultStatusMessage,
  tags: ['autodocs'],
};

export const Loading = {
  render: (args) => (
    <div style={{ height: '300px', position: 'relative' }}>
      <DefaultStatusMessage {...args} />
    </div>
  ),
  args: { status: 'loading' },
};

export const Empty = {
  render: (args) => (
    <div style={{ height: '300px', position: 'relative' }}>
      <DefaultStatusMessage {...args} />
    </div>
  ),
  args: { status: 'empty' },
};
