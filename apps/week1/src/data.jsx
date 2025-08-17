import SvgIcon from "./components/SvgIcon/SvgIcon.jsx";
import UploadButton from "./components/UploadButton/UploadButton.jsx";

export const SVGICON_ITEMS = [
  {
    title: "up-arrow",
    render: () => <SvgIcon />,
  },
  { title: "spinner", render: () => <SvgIcon type="spinner" /> },
  { title: "check-mark", render: () => <SvgIcon type="check-mark" /> },
  { title: "cross", render: () => <SvgIcon type="cross" /> },
  { title: "not-allowed", render: () => <SvgIcon type="not-allowed" /> },
];

export const BUTTON_ITEMS = [
  { title: "idle", render: () => <UploadButton label="업로드 대기" /> },
  {
    title: "pending",
    render: () => (
      <UploadButton label="업로드 중" status="pending">
        업로드 중
      </UploadButton>
    ),
  },
  {
    title: "resolved",
    render: () => (
      <UploadButton label="업로드 성공" status="resolved">
        {" "}
        완료{" "}
      </UploadButton>
    ),
  },
  {
    title: "rejected",
    render: () => (
      <UploadButton label="업로드 실패" status="rejected">
        실패
      </UploadButton>
    ),
  },
  {
    title: "disabled",
    render: () => <UploadButton label="비활성 버튼" status="disabled" />,
  },
];
