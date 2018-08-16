import React from 'react';
import ReactDOM from 'react-dom';
import TopAppBar from '../../../packages/top-app-bar';

import MaterialIcon from '../../../packages/material-icon';

export default () => {
  return (
    <div className='top-app-bar-container'>
      <TopAppBar
        prominent
        title='Miami, FL'
        navigationIcon={<MaterialIcon
          icon='menu'
          onClick={() => console.log('prominent click')}
        />}
        actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
      />
    </div>
  );
}
