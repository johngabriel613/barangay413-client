import { useEffect, useState } from 'react'
import Banner from '../components/common/Banner'
import Card from '../components/request/Card'
import HowItWorks from '../components/request/HowItWorks'
import { homeBannerImg } from '../constants/images'
import Modal from '../components/request/Modal'
import { useModal } from '../hooks/useModal'
import { useNavigation } from 'react-router-dom'

const Request = () => {
  const {modalType, showModal} = useModal();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(modalType)
  },[modalType])

  return (
    <div>
      <Banner 
        title="Document Request"
        subtitle="Set an online request"
        bgImage={homeBannerImg}
        style={'h-[250px]'}
      />
      
      <div className='request-grid-layout container mt-4'>
        <Card name='Barangay Certificate' type={'bcert'}/>
        <Card name='Certificate of Indigency' path='./indigency' type={'indigency'}/>
        <Card name='Business Clearance' path='./bclearance' type={'bclearance'}/>
        <Card name='Good Moral' path='./gmoral' type={'gmoral'}/>
        <Card name='First Time Job-Seeker' path='./ftjs' type={'ftjs'}/>
        <Card name='Manila ID' path='./mid' type={'mid'}/>
      </div>


      {showModal && <Modal/>}
    </div>
  )
}

export default Request
