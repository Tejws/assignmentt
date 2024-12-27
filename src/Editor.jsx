import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { CustomAlertExtension } from './CustomAlertExtension';
import './Editor.css'; // Import custom styles

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomAlertExtension,
      Placeholder.configure({
        placeholder: 'Start typing here...', // Placeholder text
      }),
    ],
    content: '', // No default content
  });

  const addAlert = (type) => {
    editor.chain().focus().setCustomAlert(type).run();
  };

  const clearEditor = () => {
    editor.chain().clearContent().run();
  };

  return (
    <div className="editor-wrapper">
      <h1 className="editor-title">Custom Tiptap Editor</h1>
      <p className="editor-subtitle">Add alerts or edit your content with ease!</p>

      <div className="button-container">
        <button className="btn info-btn" onClick={() => addAlert('info')}>
          Add Info Alert
        </button>
        <button className="btn warning-btn" onClick={() => addAlert('warning')}>
          Add Warning Alert
        </button>
        <button className="btn clear-btn" onClick={clearEditor}>
          Clear Content
        </button>
      </div>

      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
