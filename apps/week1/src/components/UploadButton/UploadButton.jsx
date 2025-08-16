import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import './UploadButton.css';

export default function UploadButton({
  lang = 'ko',
  label,
  status = 'idle',
  color = '#525577',
  size,
  children,
  ...props
}) {
  const isBtnDisabled = status === 'disabled';

  const iconMap = {
    idle: 'up-arrow',
    pending: 'spinner',
    resolved: 'check-mark',
    rejected: 'cross',
    disabled: 'not-allowed',
  };

  return (
    <button
      type="button"
      className={`btn btn--${status}`}
      lang={lang}
      aria-label={label}
      title={label}
      disabled={isBtnDisabled}
      {...props}
    >
      {children}
      {iconMap[status] && (
        <SvgIcon
          type={iconMap[status]}
          size={size}
          color={isBtnDisabled ? '#ADAEB6' : color}
          label={label}
        />
      )}
    </button>
  );
}
