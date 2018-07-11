import React, { Component } from 'react';
import {Text, View, ImageBackground} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import './Committees.css';
import ScrollUpButton from 'react-scroll-up-button';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';

export default class committees extends Component {
    render(){
        return (
            <View>
      <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: 'images/backmap.jpg'}}
        style={{width: '100%', height: '100%', marginTop:"-1em", opacity: 0.9}} >
              <div class="section" style={{height:"100%", width: "100%"}}>
        <Image id="mainlogo" src="images/logo.jpg" id="mainlogo" className="header-image" style={ {position: "relative", height: "100%", width: "100%", marginTop: "0.25em"} } /> 
        </div>
      <ScrollUpButton/>
            <ScrollUpButton />
                      <div><br></br><br></br></div>
                <Grid id="whole">
                <div className="col-lg-4"><a href="/com/IP"><Image style={{position: "relative", cursor: "pointer"}} src="images/IP.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/UNSC"><Image style={{position: "relative", cursor: "pointer"}} src="images/UNSC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/DISEC"><Image style={{position: "relative", cursor: "pointer"}} src="images/DISEC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/UNHRC"><Image style={{position: "relative", cursor: "pointer"}} src="images/UNHRC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/MSC"><Image style={{position: "relative", cursor: "pointer"}} src="images/MSC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/ESS"><Image style={{position: "relative", cursor: "pointer"}} src="images/ESS.jpg" className="secpic"/></a><br></br><br></br></div>
                <div><br></br><br></br><br></br><br></br></div>
            </Grid>
            </ImageBackground>
            </View>
        )
    }
}