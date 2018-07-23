import React, {Component} from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text, ImageBackground} from 'react-native';
import './Applications.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';

export default class Applications extends Component{

      render(){

          return(

              <View><iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfNCM7EDtACvYizbbWASd1YQVnGLDipdjoyFRpmQhPoYHluA/viewform?embedded=true" width="100%" height="750px" style={{marginTop: "3.5em"}} frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                  
                  <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
              </View>

          );


      }

}