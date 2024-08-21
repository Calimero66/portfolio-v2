import React from 'react';
import { IconCloudWrapper } from './ui/IconCloudWrapper';

function ParentComponent() {
    return (
        <div className='flex flex-col mx-auto h-screen'>
            {/* Other components and logic */}
            <h3 className=' text-center text-5xl justify-center font-light  '>
                My Skills
                <IconCloudWrapper />
            </h3>
        </div>
    );
}

export default ParentComponent;