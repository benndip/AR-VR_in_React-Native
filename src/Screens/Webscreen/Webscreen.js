'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import {
  ViroARSceneNavigator,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  ViroAmbientLight,
  ViroPortalScene,
  ViroPortal,
  Viro3DObject,
  Viro360Video,
  Viro360Image
} from 'react-viro'



class Webscreen extends Component {

  state = {
    dollarBills: [],
    interval: null,
    score: 0,
    tracking: false
  };

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onInitialized = (state, reason) => {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({ tracking: true });
      // this.startGame()
    }
  };


  addRandomBill = () => {
    this.setState(({ dollarBills }) => ({
      dollarBills: [
        ...dollarBills,
        {
          position: [
            this.randomDecimalNumber(-2, 2),
            this.randomDecimalNumber(-2, 2),
            this.randomDecimalNumber(-2, 2)
          ],
          rotation: [
            this.randomDecimalNumber(-45, 45),
            this.randomDecimalNumber(-45, 45),
            this.randomDecimalNumber(-45, 45)
          ]
        }
      ]
    }));
  }

  startGame = () => {
    let interval = setInterval(this.addRandomBill, 1000);
    this.setState({ interval });
  };

  randomDecimalNumber = (min, max) =>
    Math.random() * (Math.random() < 0.5 ? min : max);

  bumpScore = () => {
    this.setState(({ score }) => {
      return { score: score + 1 };
    });
  };

  onDollarSelect = index => {
    this.setState(({ dollarBills }) => {
      const newDollarBills = [...dollarBills];
      newDollarBills.splice(index, 1);
      this.bumpScore();
      return { dollarBills: newDollarBills };
    });
  };

  renderARScene = () => {
    const { dollarBills, tracking } = this.state;
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroAmbientLight color="#ffffff" />
        {tracking &&
          <ViroPortalScene
            passable={true}
            onPortalEnter={this.startGame}
          >
            <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
              <Viro3DObject
                source={require("../../../res/portal_ship/portal_ship.vrx")}
                resources={[
                  require("../../../res/portal_ship/portal_ship_diffuse.png"),
                  require("../../../res/portal_ship/portal_ship_normal.png"),
                  require("../../../res/portal_ship/portal_ship_specular.png")
                ]}
                type="VRX"
                onLoadStart={() => this.setState({ loading: true })}
                onLoadEnd={() => this.setState({ loading: false })}
              />
            </ViroPortal>
            {/* <Viro360Image source={require('../../../res/joshua_tree.jpg')} /> */}
            <Viro360Video source={require("../../../res/360_surf.mp4")} loop={true} />
            {dollarBills.map((item, index) => (
              <ViroBox
                key={index}
                position={item.position}
                rotation={item.rotation}
                onClick={() => this.onDollarSelect(index)}
                height={0.2}
                length={0.01}
                width={0.6}
                materials={['money']}
              />
            ))}
          </ViroPortalScene>
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
        <Text style={styles.score}>Score: {this.state.score}</Text>
        <TouchableOpacity
          onPress={() => this.setState({ score: 0 })}
          style={styles.restartContainer}
        >
          <Text style={styles.restart}>Restart</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ViroMaterials.createMaterials({
  money: {
    shininess: 2.0,
    lightingModel: 'Blinn',
    diffuseTexture: require('../../../res/DollarFront.JPG')
  },
})

ViroAnimations.registerAnimations({
  spin: {
    properties: {
      rotateY: '+=45'
    },
    duration: 2000
  }
});

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    fontSize: 50,
    marginTop: 30
  },
  restart: {
    color: 'white',
    fontSize: 30
  },
  restartContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 30
  }
});

export default Webscreen