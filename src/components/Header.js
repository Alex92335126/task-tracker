import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {


  return (
    <header className='header'>
      <h1 style={{color:'blue'}}>{title}</h1>
      <Button color={showAdd ? 'red' : 'blue'}
      text={showAdd ? 'Close' : 'Add'} 
      onClick= {onAdd} />

      {/* <Button color='blue' text='Hello_2' />
      <Button color='red' text='Hello_3' /> */}
    </header>
  )
}

Header.defaultProps = { 
    title: 'Task Tracker',     
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
