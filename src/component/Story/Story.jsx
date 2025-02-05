import React from 'react'
import StoryViewer from '../StoryComponent/StoryViewer'

const Story = () => {
    const stories = [
        {
            image: "https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2024/08/23/12/53/water-lily-8991682_1280.png"
        },
        {
            image: "https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2024/08/23/12/53/water-lily-8991682_1280.png"
        },
        {
            image: "https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg"
        }
    ]
    return (
        <div>
            <StoryViewer Stories={stories} />
        </div>
    )
}

export default Story