import VoxelRay from './posts/voxel_ray';
import Mixer3D from './posts/mixer_3d';
import OldMixer from './posts/old_mixer';
import VoxelMixer from './posts/voxel_mixer';
import WeatherNSU from './posts/weather_nsu';
const pages = [
    
    {text: 'Weather NSU app', short:"Small weather app using data from weather.nsu.ru", link:'/weather_nsu', tags: ['Flutter', 'Android'], page: <WeatherNSU/>}, 
    {text: 'Voxel raytracing engine (again?)', short:"Realtime GPU/CPU voxel raytracer", link:'/voxel_mixer', tags: ['C++', 'OpenGL', 'Raytracing', 'Voxels'], page: <VoxelMixer/>}, 
    {text: 'Realtime voxel raytracer', short:"Realtime GPU voxel raytracing engine", link:'/voxel_ray', tags: ['C++', 'OpenGL', 'Raytracing', 'Voxels'], page: <VoxelRay/>}, 
    {text: 'Mixer 3D', short:"3D engine with raytracing written in C++ and OpenGL", link:'/mixer_3d', tags: ['C++', 'OpenGL', 'Raytracing'], page: <Mixer3D/>},
    {text: 'Simple 3D engine', short:"Simple 3D engine built only with SDL", link:'/old_mixer', tags: ['C++','SDL', '3D engine'], page: <OldMixer/>},
    
  ];

  export default pages;