import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onclick={onAdd}
        />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

// CSS IN JS
// const headingStyle = {
//   backgroundColor: 'red',
//   color: 'white',
// };

export default Header;
