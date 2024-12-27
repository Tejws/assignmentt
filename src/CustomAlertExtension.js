import { Node } from '@tiptap/core';

export const CustomAlertExtension = Node.create({
  name: 'customAlert',

  group: 'block',

  content: 'inline*',

  addAttributes() {
    return {
      type: {
        default: 'info', // Default alert type
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="custom-alert"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { ...HTMLAttributes, 'data-type': 'custom-alert' }, 0];
  },

  addCommands() {
    return {
      setCustomAlert:
        (type = 'info') =>
        ({ commands }) => {
          return commands.insertContent({
            type: 'customAlert',
            attrs: { type },
          });
        },
    };
  },
});
