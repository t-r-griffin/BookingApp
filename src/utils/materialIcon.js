import React from 'react';

export const MaterialIcon = ({ className, icon }) => (
  <i className={`material-icons ${className}`}>{icon}</i>
);

export const CustomInput = React.forwardRef(
  ({ value, onClick, className }, ref) => (
    <button type="button" className={className} onClick={onClick} ref={ref}>
      {value}
    </button>
  )
);
