import styled from 'styled-components';
import Menu from './components/Menu';

const sideMenus = [
  'κ°μ νκΉ π',
  'μ½λΌ π₯€',
  'μ ν νμ΄ π₯§',
  'μννΈ μμ΄μ€ν¬λ¦Ό π¦',
  'μ ννμ§ μμ',
];

const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppBlock>
      <Menu list={sideMenus} />
    </AppBlock>
  );
}

export default App;
