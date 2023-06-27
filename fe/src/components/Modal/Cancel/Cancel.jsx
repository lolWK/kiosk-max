export default function Cancel({ className, handleModal }) {
  return (
    <button className={className} type="button" onClick={handleModal}>
      닫기
    </button>
  );
}
