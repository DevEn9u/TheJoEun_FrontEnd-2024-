export default function Checkbox({ children, checked, onChange }) {
  return (
    <label className="checkbox">
      <input type="checkbox" className="blind" onChange={onChange} defaultChecked={checked} />
      {children}
    </label>
  );
}