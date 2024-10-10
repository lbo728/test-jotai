import { useAtom, useSetAtom } from "jotai";
import { modalState } from "@/jotai/modal/store";
import { isIframePointer } from "@/jotai/iframe/store";

import { IModalProps } from "@/types/modal";

import GlobalNavigation from "@/components/GlobalNavigation";
import IframeComponent from "@/components/Iframe";

import styled from "styled-components";

export default function MainView() {
  const [pointerState, setPointerState] = useAtom(isIframePointer);
  const setModal = useSetAtom(modalState);

  const clickThisPageButton = ({ buttonLabel, contents }: IModalProps) => {
    setPointerState((prev) => ({ isPointerEvent: !prev.isPointerEvent }));

    setModal((pervState) => ({
      ...pervState,
      isOpen: true,
      buttonLabel: buttonLabel,
      contents: contents,
    }));
  };

  return (
    <>
      <GlobalNavigation />
      <Container>
        <Title>{"Iframe 전역 상태 관리"}</Title>
        <button
          onClick={() =>
            clickThisPageButton({
              buttonLabel: "확인",
              contents: "Iframe이 있는 페이지 모달",
            })
          }
        >
          버튼이오
        </button>
        <IframeComponent isPointerEvent={pointerState.isPointerEvent} />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 135px 19px 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 11px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-line;
  text-align: center;
  line-height: 43px;
`;
