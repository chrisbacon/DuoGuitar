import React from 'react';

class Tabber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    // this.setState({tabString: this.props.tabString})
    this.checkThings()
  }

  checkThings(){
    console.log(this.props.tabString)
    let tabLinesArray = this.props.tabString.split("break");
    console.log(tabLinesArray)
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
    console.log(tabColumnsArray)
    this.tabColumnsArray = tabColumnsArray;
  }

  render(){
    const styles = {
      tabContainer: {
        display: "flex"
      },
      tabColumn: {
        margin: "0",
        padding: "0",
        fontFamily: "cursive",
        display: "flex",
        flexDirection: "column"
      },
      tabUnit: {
        margin: "0",
        padding: "0",
        display: "block",
        width: "20px",
        height: "20px",
      },
      tabUnitText: {
        margin: "0",
        padding: "0",
        display: "block",
        marginTop: "-50%",
        width: "100%",
        height: "100%",
      },
      tabUnitBackground: {
        margin: "0",
        padding: "0",
        display: "block",
        backgroundColor: "black",
        marginTop: "-32%",
        width: "100%",
        height: "4%",
      }
    }

    if(this.tabColumnsArray){

      let renderedTabArray = []

      this.tabColumnsArray.forEach((tabColumn) => {
        let renderedTabColumn = []
        tabColumn.forEach((tabUnit) => {
          renderedTabColumn.push(<div className="tab-unit" style={styles.tabUnit}><div className="tabUnitText" style={styles.tabUnit}>{(tabUnit!=="-") ? tabUnit : " "}</div><div style={styles.tabUnitBackground} className="tabUnitBackground"></div></div>)
        })
        renderedTabArray.push(renderedTabColumn)
      })

      console.log(renderedTabArray)




      const renderedTabColumnsArray = renderedTabArray.map((tabUnit) => {
        return <div style={styles.tabColumn} className="tabColumn">
          {tabUnit[0]}
          {tabUnit[1]}
          {tabUnit[2]}
          {tabUnit[3]}
          {tabUnit[4]}
          {tabUnit[5]}
        </div>
      })
      console.log(renderedTabColumnsArray)
      // })
      // renderedTabArray.forEach((renderedTabColumn) => {
      //   console.log(renderedTabColumn)

      return(
        <div style={styles.tabContainer} className="tabContainer">
          {renderedTabColumnsArray}
        </div>
      )

    } else {
      return(null)
    }
  }
}

export default Tabber
