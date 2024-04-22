import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import  { StatusBar } from 'react-native';

export default function App() {

  return (
  <>
  <StatusBar style="light"  />
   <NativeRouter>
    <Main/>
  </NativeRouter>
  
  </>
  
  
 
  
  
  );
}

