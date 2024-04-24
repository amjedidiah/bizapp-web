import { MouseEvent, MouseEventHandler, useCallback, useRef } from "react";

const getIsInDialog = (
  dialog: HTMLDialogElement,
  event: MouseEvent<HTMLDialogElement>
) => {
  var rect = dialog.getBoundingClientRect();
  var isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  return isInDialog;
};

export default function useModal() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback(() => {
    const dialog = modalRef?.current;
    if (!dialog) return;

    dialog.showModal();
  }, []);

  const closeSelf: MouseEventHandler<HTMLDialogElement> = useCallback(
    (event) => {
      const dialog = modalRef?.current;
      if (!dialog) return;

      const isInDialog = getIsInDialog(dialog, event);

      if (!isInDialog) dialog.close();
    },
    []
  );

  const closeModal = useCallback(() => {
    const dialog = modalRef?.current;
    if (!dialog) return;

    dialog.close();
  }, []);

  return { modalRef, openModal, closeSelf, closeModal };
}
