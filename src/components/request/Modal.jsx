import { axios } from "../../config/api";
import { useModal } from "../../hooks/useModal";
import { Form, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";

const modalTypes = {
  type_1: 'bcert',
  type_2: 'indigency',
  type_3: 'bclearance',
  type_4: 'gmoral',
  type_5: 'ftjs',
  type_6: 'mid'
}

const modalConfig = {
  [modalTypes.type_1]:{
    type: 'bcert',
    title: 'Barangay Certificate',
    inputs: [
      {
        name: 'name',
        text: 'Name'
      },
      {
        name: 'address1',
        text: 'House / Block No.'
      },
      {
        name: 'address2',
        text: 'Street'
      },
      {
        name: 'address3',
        text: 'Barangay',
        defaultValue: 'Barangay 413 Zone 42'
      },
      {
        name: 'purpose',
        text: 'Purpose'
      },
    ]
  },
  [modalTypes.type_2]:{
    type: 'indigency',
    title: 'Certificate of Indigency',
    inputs: [
      {
        name: 'name',
        text: 'Name'
      },
      {
        name: 'address1',
        text: 'House / Block No.'
      },
      {
        name: 'address2',
        text: 'Street'
      },
      {
        name: 'address3',
        text: 'Barangay',
        defaultValue: 'Barangay 413 Zone 42'
      },
      {
        name: 'purpose',
        text: 'Purpose'
      },
    ]
  },
  [modalTypes.type_3]:{
    type: 'bclearance',
    title: 'Business Clearance',
    inputs: [
      {
        name: 'name',
        text: 'Name of the Owner'
      },
      {
        name: 'address1',
        text: 'House / Block No.'
      },
      {
        name: 'address2',
        text: 'Street'
      },
      {
        name: 'address3',
        text: 'Barangay',
        defaultValue: 'Barangay 413 Zone 42'
      },
      {
        name: 'businessName',
        text: 'Business Name'
      },
      {
        name: 'businessAddress',
        text: 'Business Address'
      },
    ]
  },
  [modalTypes.type_4]:{
    type: 'gmoral',
    title: 'Certificate of Good Moral',
    inputs: [
      {
        name: 'name',
        text: 'Name'
      },
      {
        name: 'address1',
        text: 'House / Block No.'
      },
      {
        name: 'address2',
        text: 'Street'
      },
      {
        name: 'address3',
        text: 'Barangay',
        defaultValue: 'Barangay 413 Zone 42'
      },
      {
        name: 'purpose',
        text: 'Purpose'
      },
    ]
  },
  [modalTypes.type_5]:{
    type: 'ftjs',
    title: 'First Time Job-Seeker',
    inputs: [
      {
        name: 'name',
        text: 'Name'
      },
      {
        name: 'address1',
        text: 'House / Block No.'
      },
      {
        name: 'address2',
        text: 'Street'
      },
      {
        name: 'address3',
        text: 'Barangay',
        defaultValue: 'Barangay 413 Zone 42'
      },
      {
        name: 'purpose',
        text: 'Purpose'
      },
      {
        name: 'lengthOfStay',
        text: 'Length of Stay (in Months)'
      }
    ]
  },
  [modalTypes.type_6]:{
    type: 'mid',
    title: 'Manila ID',
    inputs: [
      {
        name: 'name',
        text: 'Name'
      },
      {
        name: 'address1',
        text: 'House / Block No.'
      },
      {
        name: 'address2',
        text: 'Street'
      },
      {
        name: 'address3',
        text: 'Barangay',
        defaultValue: 'Barangay 413 Zone 42'
      },
      {
        name: 'purpose',
        text: 'Purpose'
      },
    ]
  },
}

const Modal = () => {
  const {modalType, setShowModal} = useModal();
  const navigation = useNavigation();

  return (
    <div className="absolute w-full h-dvh flex-center justify-center bg-gray-900/50 top-0 z-[999]">
      <div className="w-full max-w-[400px] bg-white shadow-lg p-6">
        <h2 className="font-semibold text-xl border-l-4 border-primary p-2 mb-2">{modalConfig[modalType].title}</h2>
        <Form action="" method="post">
          <fieldset className="grid gap-2">
            {modalConfig[modalType].inputs.map((input, index) => (
              <div className="grid gap-1" key={index}>
                <label htmlFor={modalType} className="text-sm">{input.text}</label>
                {input.name === 'address3' ? 
                  <input name={input.name} className="bg-gray-200 text-gray-600 py-2 px-4 outline-none" defaultValue={input.defaultValue} readOnly/> :
                  <input name={input.name} className="bg-gray-200 py-2 px-4" required/>              
              }
              </div>
            ))}
          </fieldset>
          <input type="text" name="type" defaultValue={modalConfig[modalType].type} hidden/>
          <div className="flex justify-end gap-4 mt-2">
            <button onClick={() => setShowModal(false)} className="text-gray-600 font-medium">Close</button>
            <button className="bg-green-500 text-white font-medium py-1 px-2" >Submit</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Modal

  export const action = setShowModal => async({request}) => {
    try {
      const formData = await request.formData();

      // Convert FormData to JSON object
      const data = {};

      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }

      Swal.fire({
        title: "Are you sure?",
        text: "I hereby certify that all my information stated is correct",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, submit it!"
      }).then((result) => {
        if (result.isConfirmed) {
          const response = axios.post('/request', data)

          if(response){
            setShowModal(false)
            Swal.fire({
              title: "Submitted!",
              text: "Please wait for approval!",
              icon: "success"
            });
          } 
        }
      });

      return {ok: true}
      

    } catch (error) {
      throw error
    }
  }
