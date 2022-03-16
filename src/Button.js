import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onClick, onChange, text }) {
  return (
    <button className={styles.btn} onClick={onClick} onChange={onChange}>
      {text}
    </button>
  );
}

//prop 의 타입 체크( 타입스크립트는 스킵 가능)
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
