import { Collapse } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { DataType, Document, DocumentCard, DocumentEditor, DOCUMENTS } from '../../__stdlib';
import { VF_BLACK } from '../../constants/Colours.constants';
import { makeStyles } from '../../Helpers/makeStyles';

const useStyles = ({ isOpen }: { isOpen: boolean }) =>
  makeStyles({
    container: {
      display: 'flex',
      backgroundColor: '#bfabf0',
      justifyContent: 'space-between',
    },
    itemContainer: {
      display: 'grid',
      gridTemplateColumns: isOpen ? 'repeat(3, minmax(250px, 1fr))' : 'repeat(4, minmax(calc(100vw/4), 1fr))',
    },
    item: {
      margin: 20,
      width: 250,
    },
    activeItem: {
      outline: `2px solid ${VF_BLACK}`,
    },
    sidebar: {
      width: 300,
      height: '100%',
      backgroundColor: '#f6c3cc',
    },
    collapseList: {
      minWidth: 'unset!important',
    },
  });

function DocumentManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDocument, setActiveDocument] = useState<Document<DataType>>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { classes } = useStyles({ isOpen })();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
        {DOCUMENTS.map((document) => (
          <div key={document.id} className={`${classes.item} ${document === activeDocument ? classes.activeItem : ''}`}>
            <DocumentCard doc={document} onClick={() => handleItemClick(document)} />
          </div>
        ))}
      </div>
      <Collapse in={isOpen} orientation="horizontal" collapsedSize={0} className={classes.collapseList}>
        <div className={classes.sidebar} ref={sidebarRef}>
          {activeDocument ? <DocumentEditor doc={activeDocument} onChange={handleDocEditorAction} setActiveDocument={handleDocEditorAction} /> : null}
        </div>
      </Collapse>
    </div>
  );
}

export default DocumentManager;
