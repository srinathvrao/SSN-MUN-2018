import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text} from 'react-native';
import './Applications.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';

export default class Applications extends Component {
    render() {
      var cars = ["https://docs.google.com/forms/d/1RjSZ_7p-x4qhewtT3-HOeAxUu2lyeIFWapWh-1samg8/edit"];
    window.location = cars[0];
      return (
        <View>
      </View>
      )
    }
}