import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Progressbar from './Progressbar'
const StoryViewerContainer = styled.div`
display:flex;
justify-content:center;
height:100vh;
align-items:center;
background-color:black;`

const StoryImage = styled.img`
max-height:90vh;
object-fit:contain;
`
const StoryViewer = ({ Stories }) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleNextStory = () => {
        if (currentStoryIndex < Stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setActiveIndex(activeIndex + 1);
        }
        else if (currentStoryIndex === Stories.length - 1) {
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => { handleNextStory() }, 2000)
        return () => clearInterval(interval);
    }, [currentStoryIndex, activeIndex])
    return (

        <div className='relative w-full'>
            <StoryViewerContainer>
                <StoryImage src={Stories?.[currentStoryIndex].image} />
                <div className='flex top-0 w-full absolute'>
                    {Stories.map((item, index) => <Progressbar key={index} duration={2000} index={index} activeIndex={activeIndex} />)}
                </div>
            </StoryViewerContainer>
        </div>

    )

}

export default StoryViewer