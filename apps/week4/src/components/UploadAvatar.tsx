import defaultProfileImg from "@assets/avatar.jpg";

type Props = {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string | undefined;
};

export default function UploadAvatar({ ref, onUpload, imageSrc }: Props) {
  return (
    <>
      <label htmlFor="image" className="mb-2 block font-[400] text-slate-400">
        프로필 이미지
      </label>
      <input
        ref={ref ?? undefined}
        type="file"
        name="image"
        id="image"
        accept="image/jpg,image/png"
        onChange={onUpload}
        className="hidden"
      />
      <button
        type="button"
        aria-label="프로필 사진 업로드"
        onClick={() => ref.current?.click()}
        className="aspect-square w-24 overflow-hidden rounded-full bg-gray-200"
      >
        <img
          src={imageSrc ? imageSrc : defaultProfileImg}
          alt="업로드된 프로필 사진"
          title="프로필 사진"
          className="h-full w-full object-cover"
        />
      </button>
    </>
  );
}
