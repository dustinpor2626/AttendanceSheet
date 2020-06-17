import React, {Component} from 'react';
import AppNavigator from './AppNavigator.js'

import {StyleSheet} from 'react-native';



class App extends Component
{
    render(){
        return(
          <AppNavigator/>
        );
    }
}

const styles = StyleSheet.create({

index_back:{
    height:'100%',
    width:'100%',
    resizeMode:'cover',
}

});

export default App;
