import React, { useRef, useState } from 'react'

const Otp = () => {

    let [otpfields, setOtpFields] = useState(Array(6).fill(''));
    let otpinputref = useRef([]);

    const handleOtp = (e, index) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        const singleDigitValue = numericValue.slice(0, 1);
        let copyotpfields = [...otpfields];
        copyotpfields[index] = singleDigitValue;
        if (index < otpfields.length - 1 && singleDigitValue) {
            otpinputref.current[index + 1].focus();
        }
        setOtpFields(copyotpfields);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            let copyotpfields = [...otpfields];
            copyotpfields[index] = '';
            setOtpFields(copyotpfields);
            if (index > 0) {
                otpinputref.current[index - 1].focus();
            }
        } else if (e.key === 'ArrowRight' && index < otpfields.length - 1) {
            otpinputref.current[index + 1].focus();
        } else if (e.key === 'ArrowLeft' && index > 0) {
            otpinputref.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        if (/^[0-9]*$/.test(pastedData)) {
            const copyotpfields = [...otpfields];
            for (let i = 0; i < copyotpfields.length; i++) {
                if (i < pastedData.length) {
                    copyotpfields[i] = pastedData[i];
                } else {
                    break;
                }
            }
            setOtpFields(copyotpfields);
        }
    };


    return (
        <>
            <div className='h-screen text-white flex flex-col items-center justify-center m-auto otpFields '>
                <h1 className='text-3xl mb-4'>OTP</h1>
                <div className='otpinput flex gap-4 items-center justify-center'>
                    {otpfields.map((_, index) => {
                        return (
                            <input className='w-12 h-12 text-center border bg-purple-950'
                                key={index}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                ref={(el) => (otpinputref.current[index] = el)}
                                onChange={(e) => handleOtp(e, index)}
                                value={otpfields[index]}
                                type="text"
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Otp
