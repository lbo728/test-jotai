/** @format */

import { atom } from "jotai";

interface IsIframePointer {
  isPointerEvent: boolean;
}

const initialState: IsIframePointer = {
  isPointerEvent: true,
};

export const isIframePointer = atom<IsIframePointer>(initialState);
