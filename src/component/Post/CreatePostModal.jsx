import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, Button, ModalBody } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'
import './CreatePostModal.css'
const CreatePostModal = ({ onClose, isOpen }) => {
    // const [isDragover, setDragOver] = useState(false);
    const [file, Setfile] = useState();
    const [caption, setcaption] = useState("");
    const handleDrop = (event) => {
        event.preventDefault();
        const droopedFile = event.dataTransfer.files[0];
        if (droopedFile.type.startsWith("image/") || droopedFile.type.startsWith("video/")) {
            Setfile(droopedFile);
        }
    }
    const handleDragover = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        // setDragOver(true);
    }
    const handleDragleave = (event) => {
        event.preventDefault();
    }
    const handleOnchange = (event) => {
        const file = event.target.files[0];
        if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
            Setfile(file);
        }
        else {
            Setfile(null);
            alert("please select an image or video")
        }
    }

    const handleCaptionChange = (e) => {
        setcaption(e.target.value)
    }

    return (

        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-center h-[70%]'>
                        <p>Create New Post</p>
                        <Button className='' variant={"ghost"} size={"sm"} colorScheme='blue'>Share</Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className='h-[70%] justify-between flex'>
                            <div className='w-[50%]'>

                                <div className='text-center '  >
                                    {!file &&
                                        <div onDrop={handleDrop}
                                            onDragOver={handleDragover}
                                            onDragLeave={handleDragleave}
                                            className='drag-drop'
                                        >

                                            <div>
                                                <FaPhotoVideo className='text-3xl' />
                                                <p>Drag Photos and Videos Here</p>
                                            </div>

                                            <label htmlFor="file-upload" className='custom-file-upload'>
                                                Select from computer
                                            </label>

                                            <input type="file" className='input' id='file-upload' accept='image/*,video/*' onChange={handleOnchange} />
                                        </div>}
                                    {file && <div className='h-[60vh]'><img className='h-[60vh]' alt='url' src={URL.createObjectURL(file)}></img></div>}
                                </div>

                            </div>
                            <div className='w-[1px] border  h-ful'></div>
                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                                    <p className='font-semibold ml-4'>Username</p>
                                </div>
                                <div className='px-2'>
                                    <textarea className='caption-input' placeholder='Write A Caption' name="" rows={"8"} id="" onChange={handleCaptionChange}></textarea>
                                </div>
                                <div className='flex justify-between items-center px-2'>
                                    <GrEmoji />
                                    <p className='opacity-70'>{caption?.length}/2,200</p>
                                </div>
                                <hr />

                                <div className='p-2 flex justify-between items-center'>
                                    <input type="text" placeholder='Location' className='Location-input' name="" id="" />
                                    <GoLocation />
                                </div>
                                <hr />
                            </div>
                        </div>


                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>

    )

}

export default CreatePostModal