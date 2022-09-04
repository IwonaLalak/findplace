import React, { useState } from 'react';
import Button, { ButtonSizes, ButtonVariants } from '../../buttons/Button';
import Modal from './../../modals/Modal';

interface Props {
  tip?: string;
}

/** Shows before user clicks and checks out his/her type  */
const BeginBox = ({ tip }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showTip, setShowTip] = useState<boolean>(false);

  const isTipExists = !!tip;

  const handleOpenTipModal = () => {
    setOpenModal(true);
  };

  const handleCloseTipModal = () => {
    setOpenModal(false);
    setShowTip(false);
  };

  const handleConfirmShowTip = () => {
    setShowTip(true);
  };

  return (
    <>
      <div className="beginbox">
        <h2>Look around and guess where you are</h2>
        <h5>Click on map to select a localization</h5>
        {isTipExists && (
          <div className="beginbox__tip">
            <h6>Don't you have any clue?</h6>
            <Button variant={ButtonVariants.SECONDARY} size={ButtonSizes.SMALL} onClick={handleOpenTipModal}>
              Show tip
            </Button>
          </div>
        )}
      </div>

      <Modal isOpen={openModal} handleClose={handleCloseTipModal} title="Small tip for you">
        <>
          {!showTip && (
            <div>
              <h6>Are you sure? It will cost you 10 points...</h6>
              <Button variant={ButtonVariants.SECONDARY} size={ButtonSizes.SMALL} onClick={handleConfirmShowTip}>
                Show tip anyway
              </Button>
            </div>
          )}
          {showTip && <h6>sample tip text</h6>}
        </>
      </Modal>
    </>
  );
};

export default BeginBox;
