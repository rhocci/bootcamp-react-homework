import { forwardRef } from "react";
import defaultProfileImg from "@assets/avatar.jpg";

type Props = {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc?: string;
};

// forwardRef로 ref를 input에 붙여주기
const UploadAvatar = forwardRef<HTMLInputElement, Props>(
  ({ onUpload, imageSrc }, ref) => {
    return (
      <>
        <label htmlFor="image" className="mb-2 block font-[400] text-slate-400">
          프로필 이미지
        </label>
        <input
          ref={ref}
          type="file"
          name="image"
          id="image"
          accept="image/jpeg,image/png"
          onChange={onUpload}
          className="hidden"
        />
        <button
          type="button"
          aria-label="프로필 사진 업로드"
          onClick={() =>
            (ref as React.RefObject<HTMLInputElement>).current?.click()
          }
          className="aspect-square w-24 overflow-hidden rounded-full bg-gray-200"
        >
          <img
            src={imageSrc ?? defaultProfileImg}
            alt="업로드된 프로필 사진"
            title="프로필 사진"
            className="h-full w-full object-cover"
          />
        </button>
      </>
    );
  },
);

export default UploadAvatar;
