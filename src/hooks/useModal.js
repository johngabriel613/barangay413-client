import { useContext } from "react"
import { ModalContext } from "../context/ModalContextProvider"

export const useModal = () => {
  return useContext(ModalContext)
}