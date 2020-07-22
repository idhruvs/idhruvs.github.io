import React from 'react';
import Resume from '@components/Resume';
import PrintButton from '@components/PrintButton';
import './style.scss';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <PrintButton id={'DhruvShah-Resume'} label={'Download'} />
        <div className="landing-page-large for-large-screens">
          <div className="landing-page-wrapper">
            <Resume id={'DhruvShah-Resume'} />
          </div>
        </div>
      </div>
    );
  }
}
