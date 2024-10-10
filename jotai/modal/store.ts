import { atomWithReset } from 'jotai/utils';

interface ModalState {
  isOpen: boolean;
  title?: string;
  buttonLabel?: string;
  contents: string;
}

const initialState: ModalState = {
  isOpen: false,
  title: '',
  buttonLabel: '',
  contents: '',
};

export const modalState = atomWithReset<ModalState>(initialState);
