import styled from 'styled-components/native';

type ItemProps = {
  active?: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: #f8fafc;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 250px;
`;
export const ItemWrapper = styled.TouchableOpacity<ItemProps>`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  margin: 0px;
  border-radius: 30px;
  background-color: ${({ active }) =>
    active ? 'rgba(79,70,229,0.12)' : 'transparent'};
`;

export const ItemLabel = styled.Text<ItemProps>`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ active }) => (active ? '#4F46E5' : '#1e293b')};
`;
