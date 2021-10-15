import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
/**
 * Import all page components here
 */
import UI from './main';
import VoxelRay from './posts/voxel_ray';
import Mixer3D from './posts/mixer_3d';
import OldMixer from './posts/old_mixer';

function Routes() {
  return (
    <Router>
        <Switch>
          <Route path='/voxel_ray'>
            <VoxelRay/>
          </Route>
          <Route path='/mixer_3d'>
            <Mixer3D/>
          </Route>
          <Route path='/old_mixer'>
            <OldMixer/>
          </Route>
          <Route path=''>
            <UI />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;