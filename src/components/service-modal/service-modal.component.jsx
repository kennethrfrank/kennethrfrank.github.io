import {Modal, Button, Icon} from 'semantic-ui-react'
import React from 'react';
import './service-modal.styles.css'
import Calendly from './calendly/calendly.component';

const returnModalType = (modalType)=>{
    if(modalType == 'calendar'){
        return <Calendly/>
    }else{
        return <div>sucks2suck</div>
    }
}
const ServiceModal = ({open, setOpen, type, callToAction})=>{
    return(
    <Modal
        basic
        onClose={()=> setOpen(false)}
        onOpen={()=> setOpen(true)}
        open = {open}
        trigger={<Button className='modalButton' icon fluid><Icon name={`${type} alternate`}/> {callToAction}</Button>}>
          <Modal.Content>
            {returnModalType(type)}
          </Modal.Content>

      </Modal>
    )
}

export default ServiceModal;