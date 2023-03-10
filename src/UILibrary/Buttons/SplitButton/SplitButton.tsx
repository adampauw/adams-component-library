import React, { useState } from 'react';

import IconChevronDown from '../../../../public/chevron-down';
import { useStyles } from './SplitButton.styles';

export interface SplitButtonProps {
  items: MenuItem[];
}
interface MenuItem {
  label: string;
  action: () => void;
}

export const SplitButton = ({ items }: SplitButtonProps) => {
  const { classes } = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(items[0]);

  const handleActionClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    setSelection(item);
    setIsOpen(false);
  };

  return (
    <div className={classes.buttonWrapper}>
      <div className={classes.actionWrapper}>
        <button className={classes.actionButton} onClick={selection.action}>
          {selection.label}
        </button>
        <button className={classes.menuButton} onClick={handleActionClick}>
          {IconChevronDown()}
        </button>
      </div>
      {isOpen && (
        <ul className={classes.unorderedList}>
          {items.map((item, index) => (
            <li className={classes.listItem} key={index} onClick={() => handleMenuItemClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SplitButton;
