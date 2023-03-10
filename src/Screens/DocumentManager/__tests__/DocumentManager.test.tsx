import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { DataType, DocumentID } from '../../../__stdlib/data';
import DocumentManager, { DocumentManagerProps } from '../DocumentManager';

const documents: DocumentManagerProps['documents'] = [
  {
    id: 'document-1' as DocumentID,
    name: 'Log 1',
    data: {
      type: DataType.LOG,
      message: 'This is a log message',
      then: 'document-2' as DocumentID,
    },
  },
  {
    id: 'document-3' as DocumentID,
    name: 'Log 2',
    data: {
      type: DataType.LOG,
      message: 'This is a log message',
      then: 'document-4' as DocumentID,
    },
  },
];

const documentCard = 'document-card';

describe('DocumentManager', () => {
  test('renders the document list', () => {
    render(<DocumentManager documents={documents} />);
    const items = screen.getAllByTestId(documentCard);
    expect(items).toHaveLength(documents.length);
    expect(items[0]).toHaveTextContent(documents[0].name);
    expect(items[1]).toHaveTextContent(documents[1].name);
  });

  test('opens the document editor when a document is clicked', () => {
    render(<DocumentManager documents={documents} />);
    const item = screen.getAllByTestId(documentCard)[0];
    fireEvent.click(item);
    const editor = screen.getByTestId('document-editor');
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveTextContent(documents[0].name);
  });

  test('closes the document editor when clicking outside the sidebar', () => {
    render(<DocumentManager documents={documents} />);
    const item = screen.getAllByTestId(documentCard)[0];
    fireEvent.click(item);
    const editor = screen.getByTestId('document-editor');
    expect(editor).toBeInTheDocument();
    fireEvent.mouseUp(document.body); // Click outside the sidebar
    expect(editor).not.toBeInTheDocument();
  });
});
