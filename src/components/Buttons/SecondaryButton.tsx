import { View, Text } from 'react-native';
import React from 'react';
import { AlternateButton, AlternateText } from '@/styles/loginStyles';

type Props = {
  text: string;
  onPress: () => void;
};

const SecondaryButton = (props: Props) => {
  return (
    <AlternateButton onPress={props.onPress}>
      <AlternateText> {props.text}</AlternateText>
    </AlternateButton>
  );
};

export default SecondaryButton;
