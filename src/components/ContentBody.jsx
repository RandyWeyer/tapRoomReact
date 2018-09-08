import React from 'react';

function ContentBody(){
  var contentBodyStyle = {
    width: '50%',
    float: 'left'
  }

    return(
      <div style={contentBodyStyle}>
        <div>
          <h4>Lorem Ipsum</h4>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <h4>Lorem Ipsum</h4>
          <p>Lorem Ipsum</p>
          <hr/>
          <strong>Lorem Ipsum</strong>
        </div>
        <div>
          <h4>Lorem Ipsum</h4>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <h4>Lorem Ipsum</h4>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    )
  }

export default ContentBody;
