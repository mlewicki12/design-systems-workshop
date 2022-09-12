export default {
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['h1', 'h2'],
    },
  },
  render: ({ level }) => {
    const label = `level ${level}`;
    return `<${level}>${label}</${level}>`;
  },
};

export const h1 = {
  args: {
    level: 'h1',
  },
};
export const h2 = {
  args: {
    level: 'h2',
  },
};
