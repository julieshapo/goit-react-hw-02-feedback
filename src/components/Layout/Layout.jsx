import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  );
};
