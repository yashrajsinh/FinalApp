import React from 'react';
import { Button, ButtonText } from '@/components/styles/loginStyles';

type Props = {
  text: string;
  onPress: () => void;
};

const PrimaryButton = (props: Props) => {
  return (
    <Button onPress={props.onPress}>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};

export default PrimaryButton;
