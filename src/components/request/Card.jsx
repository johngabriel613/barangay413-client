import { arrowRight } from '../../constants/icons'
import { useModal } from '../../hooks/useModal'

const Card = ({name, type}) => {
  const {setModalType, setShowModal} = useModal();

  return (
    <button className='flex justify-between bg-gray-100 border-l-4 border-primary font-semibold p-6' onClick={() => {setModalType(type), setShowModal(true)}}>
      {name}
      <img src={arrowRight} alt="" />
    </button>
  )
}

export default Card
