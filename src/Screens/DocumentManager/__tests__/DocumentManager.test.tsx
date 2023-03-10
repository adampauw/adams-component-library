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

describe('DocumentManager', () => {
  it('renders the list of documents', () => {
    render(<DocumentManager documents={documents} />);
    const documentCards = screen.getAllByTestId('document-card');
    expect(documentCards.length).toBe(documents.length);
  });

  it('opens the document editor when a document is clicked', () => {
    render(<DocumentManager documents={documents} />);
    const firstDocumentCard = screen.getByText(documents[0].name);
    fireEvent.click(firstDocumentCard);
    const documentEditor = screen.getByTestId('document-editor');
    expect(documentEditor).toBeInTheDocument();
  });
});
