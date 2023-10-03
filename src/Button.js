import './Button.css';

function Button(props) {
 
  return (
    <button className="calculator-button" data-label={props.label} onClick={props.handleClick}><span>{props.label}</span></button>
  );
}

export default Button;