import React from 'react';


function Bottom() {

  let style = {
    color: 'white',
    width: '80%',
    height: '20px',
    margin: '0 auto',
    marginTop: '0px',
  }

  return(
    <div>
      <div style={style}>
        <div class="bottom-nav-width">
          <ul>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Bottom;



// <li [id]='index.information' *ngFor='let index of lists | async' (click)='onClick(index.information)'>
//   <span  *ngIf='index.url != nul'><a href='{{index.url}}'>{{index.information}}</a></span>
//   </li>
