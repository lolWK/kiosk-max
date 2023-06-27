export default function Cancel({ className, setShowMode }) {
  return (
    <button className={className} type="button" onClick={() => setShowMode('')}>
      닫기
    </button>
  );
}
