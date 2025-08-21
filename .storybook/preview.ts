import type { Preview } from '@storybook/react-vite';

import '@freee_jp/vibes/css';

const preview : Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;