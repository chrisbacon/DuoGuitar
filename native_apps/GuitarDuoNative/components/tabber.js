import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class Tabber extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.setState({tabString: this.props.tabString})
    this.checkThings()
  }

  checkThings(){
    let tabLinesArray = this.props.tabString.split("break");
    this.buildTabUnits(tabLinesArray)
  }

  buildTabUnits(tabLinesArray){
    var tabColumnsArray = []
    for(var i = 0; i < tabLinesArray[0].length; i++){
      var tabColumn = []
      tabLinesArray.forEach((tabLine) => {
        tabColumn.push(tabLine[i])
      })
      tabColumnsArray.push(tabColumn)
    }
    this.tabColumnsArray = tabColumnsArray;
  }

  render(){
    const styles = {
      tabContainer: {
        flexWrap: "wrap",
        flexDirection: 'row',
        margin: 2,
        padding: 2
      },
      tabColumn: {
        margin: 0,
        padding: 0,
        flexDirection: "column"
      },
      tabUnit: {
        margin: 0,
        padding: 0,
        width: 9,
        height: 12,
      },
      tabUnitText: {
        margin: 0,
        padding: 0,
        marginTop: 0,
        width: 100,
        height: 100,
      },
      tabUnitVBreak: {
        width: 3,
        height: 100,
        backgroundColor: "gray",
        padding:0
      },
      tabUnitBackground: {
        padding: 0,
        backgroundColor: "gray",
        marginTop: -70,
        width: 100,
        height: 2,
      }
    }

    if(this.tabColumnsArray){

      let renderedTabArray = []

      this.tabColumnsArray.forEach((tabColumn) => {
        let renderedTabColumn = []
        tabColumn.forEach((tabUnit) => {
          renderedTabColumn.push(<View className="tab-unit" style={styles.tabUnit}>

          {tabUnit!=="|" ?
          <View className="tabUnitText" style={styles.tabUnitText}>{
            <Text>{(tabUnit!=="-" ? tabUnit : " ")}</Text>
          }
          </View> :
          <View className="tabUnitVBreak" style={styles.tabUnitVBreak}></View>
        }

        <View style={styles.tabUnitBackground} className="tabUnitBackground"></View></View>)
      })
      renderedTabArray.push(renderedTabColumn)
    })

    const renderedTabColumnsArray = renderedTabArray.map((tabUnit) => {
      return <View style={styles.tabColumn} className="tabColumn">
      {tabUnit[0]}
      {tabUnit[1]}
      {tabUnit[2]}
      {tabUnit[3]}
      {tabUnit[4]}
      {tabUnit[5]}
      </View>
    })

    return(
      <View style={styles.tabContainer} className="tabContainer">
      {renderedTabColumnsArray}
      </View>
    )

  } else {
    return(null)
  }
}
}
