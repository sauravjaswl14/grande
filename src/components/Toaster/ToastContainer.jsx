'use client';

import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toaster() {
  const notify = () => {
    toast('Default Notification !');

    toast.success('Success Notification !', {
      position: 'top-right',
    });

    // toast.error('Error Notification !', {
    //   position: 'top-left',
    // });

    // toast.warn('Warning Notification !', {
    //   position: 'bottom-left',
    // });

    // toast.info('Info Notification !', {
    //   position: 'bottom-center',
    // });

    // toast('Custom Style Notification with css class!', {
    //   position: 'bottom-right',
    //   className: 'foo-bar',
    // });
  };

  useEffect(() => {
    notify();
  }, []);
  return (
    <>
  
      <ToastContainer />
    </>
  );
}
