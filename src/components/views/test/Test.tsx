import React from 'react';
import Button, { ButtonSizes, ButtonVariants } from '../../buttons/Button';
import ArrowRight from '../../icons/ArrowRight';

const Test = (): JSX.Element => {
  const handleClick = () => console.log('click');

  return (
    <div style={{ padding: '15px' }}>
      <div style={{ marginTop: '25px' }}>
        <p>typography</p>
        <hr />

        <h1>Text in heading font H1</h1>
        <h2>Text in heading font H2</h2>
        <h3>Text in heading font H3</h3>
        <h4>Text in heading font H4</h4>
        <h5>Text in heading font H5</h5>
        <h6>Text in heading font H6</h6>
        <p>Text in paragraph font</p>
        <p>
          <a href="/">Text as link</a>
        </p>
      </div>
      <div style={{ marginTop: '25px' }}>
        <p>buttons</p>
        <hr />
        <p>
          <Button variant={ButtonVariants.PRIMARY} size={ButtonSizes.SMALL} onClick={handleClick} icon={<ArrowRight />}>
            check
          </Button>
          <Button variant={ButtonVariants.SECONDARY} size={ButtonSizes.SMALL} onClick={handleClick} icon={<ArrowRight />}>
            next one
          </Button>
          <Button variant={ButtonVariants.ACTION} size={ButtonSizes.SMALL} onClick={handleClick} icon={<ArrowRight />}>
            check
          </Button>
        </p>
        <p>
          <Button variant={ButtonVariants.PRIMARY} onClick={handleClick} icon={<ArrowRight />}>
            check
          </Button>
          <Button variant={ButtonVariants.SECONDARY} onClick={handleClick} icon={<ArrowRight />}>
            next one
          </Button>
          <Button variant={ButtonVariants.ACTION} onClick={handleClick} icon={<ArrowRight />}>
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
    </div>
  );
};

export default Test;
