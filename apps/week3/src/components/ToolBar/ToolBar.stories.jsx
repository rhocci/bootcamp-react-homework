import ToolBar from './ToolBar.jsx';

export default {
  title: 'Components/ToolBar',
  component: ToolBar,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => (
    <div style={{ height: '500px' }}>
      <ToolBar {...args} />
    </div>
  ),
  args: { currentPage: 1 },
};
