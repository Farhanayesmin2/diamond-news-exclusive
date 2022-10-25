import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub,FaFacebook,FaYoutube,FaWhatsapp,FaTwitter,FaLinkedin,FaUnlock,FaDiscord,FaAlignJustify} from "react-icons/fa";
import BrandCarousels from '../BrandCarousels/BrandCarousels';
const RightSideNav = () => {
    return (
        <div>
              <ButtonGroup vertical>
               <Button className='mb-2'  variant='outline-info'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='mb-2'  variant='outline-dark' ><FaGithub></FaGithub>  Login with Github</Button>
            </ButtonGroup>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
      
      <ListGroup.Item className='mb-2' variant="primary"> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'  variant="danger"> <FaYoutube></FaYoutube> Youtube </ListGroup.Item>
      <ListGroup.Item className='mb-2'  variant="primary"> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'  variant="info"> <FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                    <ListGroup.Item className='mb-2' variant="success"> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'  variant="dark"> <FaDiscord></FaDiscord> Discord</ListGroup.Item>
      <ListGroup.Item className='mb-2'  variant="info"><FaUnlock></FaUnlock> Privacy Policy</ListGroup.Item>
      <ListGroup.Item className='mb-2'  variant="dark">  <FaAlignJustify></FaAlignJustify> Terms and Condition</ListGroup.Item>
     
    </ListGroup>
            </div>
            <div className='mt-5'>
                <BrandCarousels></BrandCarousels>
            </div>
        </div>
    );
};

export default RightSideNav;