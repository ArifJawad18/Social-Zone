import React from 'react';

const Message = () => {
    return (
        <div className='mt-5 ml-5 mr-5'>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://source.unsplash.com/40x40/?portrait?4" />
    </div>
  </div>
  <div className="chat-header">
  
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://source.unsplash.com/100x100/?portrait" />
    </div>
  </div>
  <div className="chat-header">
    
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble"> OK</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
        </div>
    );
};

export default Message;