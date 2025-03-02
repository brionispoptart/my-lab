import React from 'react';
import AppCard from '../mini/app-card';

interface Props {
   
}

const Apps: React.FC<Props> = () => {
    

    return (
        <div>
        <AppCard title="App 1" description="Description 1" />
        </div>
    );
};

export default Apps;