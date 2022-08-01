  // why we are using index.js and writing exports here in components is that later we need to add multiple import statements for different components so that will add a huge import over there so to avoid that we are importing everything as an object from components folder so that index.js will handel all those imports.
  
  export { default as Header } from './Header'; 
  export { default as MainContainer } from './MainContainer';
  export { default as CreateContainer } from './CreateContainer';
  export { default as HomeContainer } from './HomeContainer';
  export { default as Loader } from './Loader';