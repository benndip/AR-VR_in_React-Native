'use strict';

import React, { Component } from 'react';

import {
  ViroARSceneNavigator,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroSphere
} from 'react-viro'

import { StyleSheet, View, Text } from 'react-native';


class Webscreen extends Component {

  state = {
    tracking: false,
    x: 0,
    y: 0,
    z: -1,
  };

  onInitialized = (state, reason) => {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({ tracking: true });
    }
  };



  renderARScene = () => {
    const { x, y, z } = this.state
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroAmbientLight color="#FFFFFF" intensity={150} />
        <ViroDirectionalLight
          color='#FFFFFF'
          direction={[1, -1, 1]}
          castsShadow={true}
        />
        {this.state.tracking &&
          <ViroSphere
            radius={0.2}
            onDrag={(position) => {
              this.setState({
                x: position[0],
                y: position[1],
                z: position[2]
              })
            }}
            position={[x, y, z]}
            materials={["moon"]}
            animation={{ name: 'spin', run: true, loop: true }}
          />
        }
      </ViroARScene>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViroARSceneNavigator
          initialScene={{ scene: this.renderARScene }}
        />
      </View>
    )
  }
}

ViroMaterials.createMaterials({
  white: {
    lightingModel: 'Blinn',
    diffuseColor: 'rgb(231,231,231)'
  },
  moon: {
    shininess: 2.0,
    lightingModel: 'Blinn',
    diffuseTexture: require('../../res/moon.jpg')
  }
})

ViroAnimations.registerAnimations({
  spin: {
    properties: {
      rotateY: '+=45'
    },
    duration: 2000
  }
});

export default Webscreen