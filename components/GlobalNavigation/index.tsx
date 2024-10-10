import { useSetAtom } from 'jotai';
import { modalState } from '@/jotai/modal/store';
import { isIframePointer } from '@/jotai/iframe/store';
import { IModalProps } from '@/types/modal';

export default function GlobalNavigation() {
  const setPointerState = useSetAtom(isIframePointer);
  const setModal = useSetAtom(modalState);

  const clickLogout = ({ buttonLabel, contents }: IModalProps) => {
    setPointerState(prev => ({ isPointerEvent: !prev.isPointerEvent }));

    setModal(pervState => ({
      pervState,
      isOpen: true,
      buttonLabel: buttonLabel,
      contents: contents,
    }));
  };

  return (
    <div>
      <button
        onClick={() =>
          clickLogout({ buttonLabel: '확인', contents: 'GNB Logout 모달' })
        }
      >
        Logout
      </button>
    </div>
  );
}
