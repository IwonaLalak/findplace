import React from 'react';
import Button, { ButtonSizes, ButtonVariants } from '../../buttons/Button';
import ArrowLeft from '../../icons/ArrowLeft';
import ArrowRight from '../../icons/ArrowRight';

const Test = (): JSX.Element => {
  const handleClick = () => console.log('click');

  return (
    <div>
      <h2>buttons</h2>
      <p>
        <Button variant={ButtonVariants.PRIMARY} size={ButtonSizes.SMALL} onClick={handleClick} icon={<ArrowLeft />}>
          check
        </Button>
        <Button variant={ButtonVariants.SECONDARY} size={ButtonSizes.SMALL} onClick={handleClick} icon={<ArrowLeft />}>
          next one
        </Button>
        <Button variant={ButtonVariants.ACTION} size={ButtonSizes.SMALL} onClick={handleClick} icon={<ArrowLeft />}>
          check
        </Button>
      </p>
      <p>
        <Button variant={ButtonVariants.PRIMARY} onClick={handleClick} icon={<ArrowLeft />}>
          check
        </Button>
        <Button variant={ButtonVariants.SECONDARY} onClick={handleClick} icon={<ArrowLeft />}>
          next one
        </Button>
        <Button variant={ButtonVariants.ACTION} onClick={handleClick} icon={<ArrowLeft />}>
          check
        </Button>
      </p>
      <p>
        <Button variant={ButtonVariants.PRIMARY} size={ButtonSizes.LARGE} onClick={handleClick} icon={<ArrowRight />} disabled>
          check
        </Button>
        <Button variant={ButtonVariants.SECONDARY} size={ButtonSizes.LARGE} onClick={handleClick} icon={<ArrowRight />} disabled>
          next one
        </Button>
        <Button variant={ButtonVariants.ACTION} size={ButtonSizes.LARGE} onClick={handleClick} icon={<ArrowRight />} disabled>
          check
        </Button>
      </p>
    </div>
  );
};

export default Test;
