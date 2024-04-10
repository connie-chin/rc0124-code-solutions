import { ReactNode, useRef } from 'react';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);

  function handleEscape(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  return (
    <dialog ref={modal} onKeyDown={handleEscape}>
      {children}
    </dialog>
  );
}
