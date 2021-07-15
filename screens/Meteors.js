import React, { Component } from 'react';
import { Text, View,Alert } from 'react-native';
import axios from 'axios'
export default class MeteorScreen extends Component {

  constructor(props) {
        super(props);
        this.state = {
            meteors: {}
        };
    }
    
      componentDidMount() {
        this.getMeteors()
        }
    
  getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=GTO0qLkiwd7dDQ9MLr8UoMfod0g60Lia4cK7HWNt")
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    render() {
      if (Object.keys(this.state.meteors).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
          let meteor_arr=Object.keys(this.state.meteors).map(meteor_date=>{
            return this.state.meteors[meteor_date]
          })
          let meteors=[].concat.apply([],meteor_arr)
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Meteor Screen</Text>
                </View>
            );
        }
        
    }
}
