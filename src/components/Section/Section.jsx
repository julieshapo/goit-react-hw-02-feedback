import PropTypes from 'prop-types';
import { SectionStyle, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

// import PropTypes from 'prop-types';
// export const Section = ({ title, children }) => {
//   return (
//     <Section>
//       <h1>{title}</h1>
//       {children}
//     </Section>
//   );
// };
