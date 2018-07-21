import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
//import './DISEC.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class unsc extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         checking:false
      };
        this.setbgimg = this.setbgimg.bind(this);
    }
    setbgimg()
    {
        var screenWidth = window.innerWidth;
      if( screenWidth < 768 ){

        // Load mobile image
        return (
            <View style={{marginTop: "3em"}}>
            
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h3 style={{color: "black", textAlign:"center"}}><b>United Nations <br></br>Security Council</b></h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/UNSCbgmFlip.png')"}}>
                <h3 style={{color:"black",textAlign:"center"}}>AGENDA:</h3>
                <p style={{color: "black", textAlign: "center", fontSize:"20px"}}>
                    "Meeting of the UNSC <br></br>on June 25th, 1948"
                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/UNSCbgmFlip.png')"}}>
                <p style={{color: "black"}}><br></br>
                Introducing the second council to be simulated at SSNMUN 2018, the United Nations Security Council.<br></br><br></br>

United Nations' founders understood that decisions affecting war and peace should happen only by consensus, and with America's consent, the veto by Security Council permanent members was enshrined in the United Nations Charter. The profound wisdom of this has underpinned the stability of international relations for decades.<br></br>- Vladimir Putin<br></br><br></br>

It must be true if your friendly neighbourhood Russian strongman said it. The United Nations Security Council, touted as the institution's most powerful body, is the organ established by the UN Charter and whose primary responsibility is the maintenance of international peace and security. The council convenes regularly to assess threats to international security and is empowered to impose binding obligations on all 193 member states of the United Nations.<br></br><br></br>

Displaying diplomacy and decisiveness in times of crisis is the hallmark of a good SC delegate. You know who you are, you know where to be. Stay tuned for more updates.<br></br>
                </p>
                <br></br></div>

                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#6e9ada"}}><h4 style={{color: "black", textAlign:"center"}}><b>Director</b></h4><Image src="../images/unsc/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}}><br></br>Srinivasan</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#6e9ada"}}><h4 style={{color: "black", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/unsc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}}><br></br>Ayush R</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#6e9ada"}}><h4 style={{color: "black", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/unsc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}}><br></br>Gowtham Srinivas</p><br></br></div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>


                <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 4,
  }}
/>
<div style={{backgroundColor: "grey", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>      <br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
      <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
      <Image src="../images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
      </div>
            </View>
        )
      }
      else{
        return (
            <View>
                <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/UNSCbgm.png'}}
        style={{width: '100%', height: '100%', marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{}}><h3 style={{color: "black", textAlign:"center"}}><b>United Nations Security Council</b></h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black",background: "url('../images/com/UNSCbgmFlip.png')"}}>
                <h3 style={{color:"black",textAlign:"center"}}><b>AGENDA:</b></h3>
                <p style={{color: "black", textAlign: "center", fontSize:"20px"}}>
                    "Meeting of the UNSC on June 25th, 1948"
                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", backgroundColor: "black",background: "url('../images/com/UNSCbgmFlip.png')"}}>
                <p style={{color: "black"}}><br></br>
                Introducing the second council to be simulated at SSNMUN 2018, the United Nations Security Council.<br></br><br></br>

United Nations' founders understood that decisions affecting war and peace should happen only by consensus, and with America's consent, the veto by Security Council permanent members was enshrined in the United Nations Charter. The profound wisdom of this has underpinned the stability of international relations for decades.<br></br>- Vladimir Putin<br></br><br></br>

It must be true if your friendly neighbourhood Russian strongman said it. The United Nations Security Council, touted as the institution's most powerful body, is the organ established by the UN Charter and whose primary responsibility is the maintenance of international peace and security. The council convenes regularly to assess threats to international security and is empowered to impose binding obligations on all 193 member states of the United Nations.<br></br><br></br>

Displaying diplomacy and decisiveness in times of crisis is the hallmark of a good SC delegate. You know who you are, you know where to be. Stay tuned for more updates.<br></br>
                </p>
                <br></br></div>

                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#6e9ada"}}><h4 style={{color: "black", textAlign:"center"}}><b>Director</b></h4><Image src="../images/unsc/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}}><br></br>Srinivasan</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#6e9ada"}}><h4 style={{color: "black", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/unsc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}}><br></br>Ayush R</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#6e9ada"}}><h4 style={{color: "black", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/unsc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}}><br></br>Gowtham Srinivas</p><br></br></div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>

                </ImageBackground>
                <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 4,
  }}
/>
<div style={{backgroundColor: "grey", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>      <br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
      <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
      <Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
            </View>
        )

      }
    }

    render() {   
        return (
          <View>
            {this.setbgimg()}
          </View>
        );   
    }
}