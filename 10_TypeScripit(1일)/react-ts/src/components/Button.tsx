export default function Button({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean | undefined;
}) {
  return <button type="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>;
}
