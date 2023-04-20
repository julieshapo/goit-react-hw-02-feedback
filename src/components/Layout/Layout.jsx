import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>
    </Container>
  );
};
