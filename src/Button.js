import './Button.css';

function Button(props) {
  const handleClick = (e) => {
    props.handleClick(props.label);
  };

  return (
    <button className="calculator-button" data-label={props.label} onClick={handleClick}><span>{props.label}</span></button>
  );
}

export default Button;