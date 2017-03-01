import React from 'react';

class Tabber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.setState({tabString: this.props.tabString})
    this.checkThings()
  }

  checkThings(){
    console.log(this.props.tabString)
    console.log("hello")
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
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "2%",
        padding: "2%"
      },
      tabColumn: {
        margin: "0",
        padding: "0",
        fontFamily: "serif",
        fontSize: "10px",
        display: "flex",
        flexDirection: "column"
      },
      tabUnit: {
        margin: "0",
        padding: "0",
        display: "block",
        width: "9px",
        height: "12px",
      },
      tabUnitText: {
        margin: "0",
        padding: "0",
        display: "block",
        marginTop: "0%",
        width: "100%",
        height: "100%",
      },
      tabUnitVBreak: {
        width: "10%",
        height: "100%",
        backgroundColor: "gray",
        padding:0
      },
      tabUnitBackground: {
        // margin: "0",
        padding: "0",
        display: "block",
        backgroundColor: "gray",
        marginTop: "-70%",
        width: "100%",
        height: "7%",
      }
    }

    if(this.tabColumnsArray){

      let renderedTabArray = []

      this.tabColumnsArray.forEach((tabColumn) => {
        let renderedTabColumn = []
        tabColumn.forEach((tabUnit) => {
          renderedTabColumn.push(<div className="tab-unit" style={styles.tabUnit}>

          {tabUnit!=="|" ?
          <div className="tabUnitText" style={styles.tabUnitText}>{
              (tabUnit!=="-" ? tabUnit : " ")
            }
          </div> :
          <div className="tabUnitVBreak" style={styles.tabUnitVBreak}></div>
          }

          <div style={styles.tabUnitBackground} className="tabUnitBackground"></div></div>)
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
