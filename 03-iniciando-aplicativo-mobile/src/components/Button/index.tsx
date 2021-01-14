import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

// Lembrando: Todo texto em Native tem que ao redor de uma tag Text
// children = texto que ta recebendo
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
