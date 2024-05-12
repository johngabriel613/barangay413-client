import {createContext, useState } from "react";

export const ModalContext = createContext()

const ModalContextProvider = ({children}) => {
  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{modalType, setModalType, showModal, setShowModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;