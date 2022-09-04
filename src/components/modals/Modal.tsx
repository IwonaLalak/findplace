import React, { ReactElement } from 'react';
import Button, { ButtonSizes, ButtonVariants } from '../buttons/Button';
import Close from './../icons/Close';

interface Props {
  children: ReactElement;
  title?: string;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, title, isOpen, handleClose }: Props) => {
  if (!isOpen) return <></>;
  else
    return (
      <div className="modal__container">
        <div className="modal__box">
          <div className="modal__title">
            <h3>{!!title && title}</h3>
            <Button size={ButtonSizes.MEDIUM} variant={ButtonVariants.PRIMARY} onClick={handleClose}>
              <Close />
            </Button>
          </div>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    );
};

export default Modal;
