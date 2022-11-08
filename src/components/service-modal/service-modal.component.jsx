import {Modal, Button, Icon} from 'semantic-ui-react'
import React from 'react';
import './service-modal.styles.css'
import Calendly from '../calendly/calendly.component';
const ServiceModal = ({open, setOpen})=>{
    return(
    <Modal
        basic
        onClose={()=> setOpen(false)}
        onOpen={()=> setOpen(true)}
        open = {open}
        trigger={<Button className='modalButton' icon fluid><Icon name='calendar alternate'/> Book a Service</Button>}>
          <Modal.Content>
            <Calendly />
          </Modal.Content>

      </Modal>
    )
}

export default ServiceModal;