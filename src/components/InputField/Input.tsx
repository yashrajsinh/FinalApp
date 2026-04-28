import React from 'react';
import { InputText } from '@/components/styles/loginStyles';

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

const Input = (props: Props) => {
  return <InputText {...props} />;
};

export default Input;
