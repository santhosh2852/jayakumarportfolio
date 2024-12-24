"use client";

import React from 'react';
// import Resume from '.'

const ResumeButton = () => {
//     const viewer = useRef(null);

//     useEffect(() => {
//         import('@pdftron/webviewer').then((lib) => {
//         WebViewer(
//             {
//             path: '/webviewer/lib',
//             initialDoc: '/JKDigitalResumepresent.pdf',
//             },
//             viewer.current,
//         ).then((instance) => {
//             // You can now call WebViewer APIs here
//         });
//         });
//     }, []);

  return (
    <div className=''>
        <a type="submit" className='justify-center block p-5 pt-5 m-5 ml-auto mr-auto text-center text-black bg-green-400 rounded-md h-max w-max' target='_blank' href='https://drive.google.com/file/d/1KjW8FZ2Wdg1LQPmXXLYLhNQrCCGesOYb/view?usp=drive_link'>Download Resume</a>
    </div>
  )
}

export default ResumeButton