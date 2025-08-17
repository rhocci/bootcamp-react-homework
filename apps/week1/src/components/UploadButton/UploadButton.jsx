import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import './UploadButton.css';

export default function UploadButton({
  lang = 'ko',
  label = '',
  status = 'idle',
  color = '#525577',
  size = 12,
  children = '업로드',
  ...props
}) {
  const isBtnDisabled = status === 'disabled';
  const ICON_MAP = {
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
      {ICON_MAP[status] && (
        <SvgIcon
          type={ICON_MAP[status]}
          size={size}
          color={isBtnDisabled ? '#ADAEB6' : color}
          label={label}
        />
      )}
    </button>
  );
}
