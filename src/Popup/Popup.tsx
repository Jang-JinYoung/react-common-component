import React from 'react';

interface IPopup {
    title: string,
    message: string;
    onConfirm?: () => void;
    onClose: () => void;
}

const Popup = ({ title, message, onConfirm, onClose }: IPopup) => {
    return (
        <div className='black_overlay dsp-b'>
            <div className="popup_wrap comm align-c dsp-b">
                <div className="fs-16">{title}</div>
                <div className="fs-14 font-999">{message}</div>
                <div className="Width-100 ta-c mt-30">
                    <button
                        className="bg-black font-white"
                        onClick={() => {
                            if (onConfirm) {
                                onConfirm();
                            }
                            onClose();
                        }}
                    >
                        확인
                    </button>
                    <button className="ml-10 mt-10" onClick={() => onClose()}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Popup;