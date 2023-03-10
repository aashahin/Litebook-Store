import "./spinner.css";
export default function Spinner() {
  return (
    <div className="spinner">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
    </div>
  );
}
