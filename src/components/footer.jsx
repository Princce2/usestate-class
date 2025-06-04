import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className='max-w-7xl mx-auto py-30'>
        <div className="flex items-center gap-4">
          <p className='bg-amber-950 rounded-full px-6 py-1 text-white'>Cash</p>
          <p className='bg-amber-950 rounded-full px-6 py-1 text-white'>Savings</p>
          <p className='bg-amber-950 rounded-full px-6 py-1 text-white'>Account</p>
          <p className='bg-amber-950 rounded-full px-6 py-1 text-white'>Investment</p>
          <p className='bg-amber-950 rounded-full px-6 py-1 text-white'>Commission</p>
        </div>
      </div>
    );
}

export default Footer;