import React, { useState } from 'react';
import Popup from './Popup';

const PopupSample = () => {

    const [isPopup, setIsPopup] = useState<boolean>(false);
    return (
        <div>
            { isPopup && <Popup title="title" message="message" onClose={() => setIsPopup(false)} />}
            <button onClick={() => setIsPopup(!isPopup)}>버튼</button>
        </div>
    )
};

export default PopupSample;