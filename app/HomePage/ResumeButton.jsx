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
    <div>
        <button type="submit" className='justify-center block p-5 pt-5 m-5 ml-auto mr-auto text-center text-black bg-green-400 rounded-md'>Download Mine Resume</button>
    </div>
  )
}

export default ResumeButton