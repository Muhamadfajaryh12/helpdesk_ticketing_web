import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = (value) => {
    setOpen(true);
    setContent(value);
  };

  return (
    <ModalContext.Provider value={{ closeModal, openModal }}>
      {children}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50  flex items-center justify-center z-50"
            onClick={() => closeModal()}
          >
            <div className="bg-white p-4 rounded-md">{content}</div>
          </div>
        </>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
