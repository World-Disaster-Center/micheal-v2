import React from 'react'
import MichaelHeader from '../../components/michael/MichaelHeader';
import MapComponent from '../../components/michael/MapComponent';
import MichaelFooter from '../../components/michael/MichaelFooter';

const MichaelMap = () => {
   return (
    <div className="relative">
      {/* Header */}
      <MichaelHeader />

      {/* Map */}
      <div className="z-10">
        <MapComponent />
      </div>

      {/* Footer */}
      <MichaelFooter />
    </div>
  );
}

export default MichaelMap