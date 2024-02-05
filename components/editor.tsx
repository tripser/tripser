import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';

const Editorsk = dynamic(() => import('./editorInit'), {
  ssr: false,
});

export const Editor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => (
  <Editorsk {...props} editorRef={ref} />
));

Editor.displayName = 'ForwardRefEditor';
