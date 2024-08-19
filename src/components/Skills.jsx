import React from 'react';
import { IconCloudWrapper } from './ui/IconCloudWrapper';

function ParentComponent() {
    return (
        <div className='lg:mr-[10rem] sm:mr-72'>
            {/* Other components and logic */}
            <h3 className=' text-center text-5xl justify-center font-light  '>
                My Skills
            </h3>
            <IconCloudWrapper />
        </div>
    );
}

export default ParentComponent;