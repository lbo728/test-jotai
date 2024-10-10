interface IframeComponentProps {
  isPointerEvent: boolean;
}

export default function IframeComponent({
  isPointerEvent,
}: IframeComponentProps) {
  return (
    <iframe
      style={{
        pointerEvents: isPointerEvent ? 'auto' : 'none',
        width: '100%',
        height: '100vh',
      }}
      src="https://byungsker.netlify.app/"
    />
  );
}
