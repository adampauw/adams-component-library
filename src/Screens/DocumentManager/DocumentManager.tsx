import { makeStyles } from '@material-ui/styles';
import { Collapse } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { DataType, Document, DocumentCard, DocumentEditor, DOCUMENTS } from '../../__stdlib';

interface DocumentManagerProps {
  isOpen: boolean;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  background-color: #bfabf0;
`;

const Item = styled.div`
  width: calc(25% - 16px);
  height: 100px;
  margin-bottom: 16px;
`;

const SideBar = styled.div<DocumentManagerProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  z-index: 1;
`;

const useStyles = makeStyles({
  collapseList: {
    minWidth: 'unset!important',
  },
});

function DocumentManager() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDocument, setActiveDocument] = useState<Document<DataType>>();
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Collapse in={isOpen} orientation="horizontal" collapsedSize={0} className={classes.collapseList}>
        <SideBar isOpen={isOpen} ref={sidebarRef}>
          {activeDocument ? <DocumentEditor doc={activeDocument} onChange={handleCloseClick} setActiveDocument={handleCloseClick} /> : null}
        </SideBar>
      </Collapse>
      {DOCUMENTS.map((document) => (
        <Item key={document.id}>
          <DocumentCard doc={document} onClick={() => handleItemClick(document)} />
        </Item>
      ))}
    </Container>
  );
}

export default DocumentManager;
