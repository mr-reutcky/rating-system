
function Dialog(props) {
  return (
    <div className="dialog-box">
      <p>{props.text}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default Dialog;
