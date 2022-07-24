import styled from 'styled-components';

import { Card } from './ui/card';

const StyledAppContainer = styled.div`
  transition: all 0.2s linear;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  background: ${({ theme }) => theme.background};
`;

function App() {
  return (
    <StyledAppContainer>
      <Card
        title="Lorem Ipsum"
        imgSrc="https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Card
        title="Lorem Ipsum"
        imgSrc="https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Card
        title="Lorem Ipsum"
        imgSrc="https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
    </StyledAppContainer>
  );
}

export default App;
