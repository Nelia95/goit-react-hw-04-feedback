import PropTypes from 'prop-types';
import Style from './Section.module.css';
const Section = ({ title, children }) => (
  <section className={Style.section}>
    <h1 className={Style.sectionTitle}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
