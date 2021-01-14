import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// RectButton = botao retagunllar que tem stylo de click bom tanto em ios como android
// quando eh component fora dos normal usa o styled(component aki)

// Todos Elementos do react native por padrao vem com Display: Flex
// Todo o button em si,menos a parte do texto
export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;
// Texto que se encontra dentro do button
export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
