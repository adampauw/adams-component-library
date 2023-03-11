import { Collapse } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { DataType, Document, DocumentCard, DocumentEditor } from '../../__stdlib';
import { useStyles } from './DocumentManager.styles';

export interface DocumentManagerProps {
  documents: Document<DataType>[];
}

function DocumentManager({ documents }: DocumentManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDocument, setActiveDocument] = useState<Document<DataType>>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyles(isOpen)();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveDocument(undefined);
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [sidebarRef]);

  const handleItemClick = (document: Document<DataType>) => {
    setIsOpen(true);
    setActiveDocument(document);
  };

  const handleDocEditorAction = (): void => {
    // TODO: Add logic here when you know what it should do (not in docs)
  };

  return (
    <div className={classes.container}>
      <div className={classes.itemContainer}>
        {documents.map((document) => (
          <div key={document.id} className={`${classes.item} ${document === activeDocument && classes.activeItem}`} data-testid="document-card">
            <DocumentCard doc={document} onClick={() => handleItemClick(document)} />
          </div>
        ))}
      </div>
      <Collapse in={isOpen} orientation="horizontal" collapsedSize={0} className={classes.collapseList} data-testid="document-editor">
        <div className={classes.sidebar} ref={sidebarRef}>
          {activeDocument ? <DocumentEditor doc={activeDocument} onChange={handleDocEditorAction} setActiveDocument={handleDocEditorAction} /> : null}
        </div>
      </Collapse>
    </div>
  );
}

export default DocumentManager;
