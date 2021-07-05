import React from 'react';

const ImageIcon = (props) => {

  return (
    <div className="imageIconWrapper">
      <div className="imageIconFirst">
        <img src={props.src1} />
        <div className="imageIconYes">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#E8F2FF"/>
            <circle cx="12" cy="12" r="11.5" stroke="#2186FF" strokeOpacity="0.6"/>
            <path d="M6.85767 12.0226L9.98891 15.1541L16.8577 8.28564" stroke="#2186FF" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      <div className="imageIconSecond">
        <img src={props.src2} />
        <div className="imageIconNo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFEFF0"/>
            <circle cx="12" cy="12" r="11.5" stroke="#E34850" strokeOpacity="0.6"/>
            <path d="M8 8L15.9998 16" stroke="#E34850" strokeWidth="1.5"/>
            <path d="M16 8L8 16" stroke="#E34850" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

    </div>
  )

};

export default ImageIcon;