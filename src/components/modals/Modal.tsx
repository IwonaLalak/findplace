import React, { ReactElement } from 'react';
import Button, { ButtonSizes, ButtonVariants } from '../buttons/Button';
import Close from './../icons/Close';

export enum ModalSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface Props {
  children: ReactElement;
  title?: string;
  size?: ModalSizes;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, title, size = ModalSizes.MEDIUM, isOpen, handleClose }: Props) => {
  if (!isOpen) return <></>;
  else
    return (
      <div className="modal__container">
        <div className={`modal__box modal__box--${size}`}>
          <div className="modal__title">
            <h3>{!!title && title}</h3>
            <Button size={ButtonSizes.MEDIUM} variant={ButtonVariants.PRIMARY} onClick={handleClose}>
              <Close />
            </Button>
          </div>
          <div className="modal__content">
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
};

export default Modal;
