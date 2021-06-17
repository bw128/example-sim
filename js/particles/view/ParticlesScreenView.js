// Copyright 2013-2020, University of Colorado Boulder

/**
 * ParticlesScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';

class ParticlesScreenView extends ScreenView {

  /**
   * @param {MagnetsModel} model - the top-level model for this screen
   */
  constructor( model ) {

    super();

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    this.addChild( new ResetAllButton( {
      listener: () => model.reset(),
      right: this.layoutBounds.right - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.bottom - ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } ) );
  }
}

exampleSim.register( 'ParticlesScreenView', ParticlesScreenView );
export default ParticlesScreenView;