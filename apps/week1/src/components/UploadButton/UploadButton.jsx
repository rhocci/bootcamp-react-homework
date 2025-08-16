import './UploadButton.css';

export default function UploadButton({
  lang,
  ariaLabel,
  status,
  color,
  size,
  children,
}) {
  return (
    <button
      className="{status} {color} {size}"
      lang={lang}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
