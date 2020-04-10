import React, { Component } from 'react';
import './Styles.css';

class Sorting extends Component{

constructor(){
    super()
    this.state=({
        numbers: [1,2,3,4,5,6,7,8,9,10],
        i: 0,
        sorting: false,
        history: [],
        sliderValue: 0,
        l: 50
    })
    this.naiveSortRepetition = this.naiveSortRepetition.bind(this)
}

componentDidMount () {
    this.generateNumbers()
}

componentDidUpdate () {      
   if (this.state.sorting) {
       if (this.state.i < this.state.l) {
            this.naiveSortRepetition()
       }
       else{
           this.setState({
               sorting: false
           })
       }
   }
}

generateNumbers(){
    var n;
    var nums = [];
    var i;
    for (i = 0; i < this.state.l; i++) {
        n = Math.floor((Math.random()-0.5) * 21)
        nums.push(n)
    }
    console.log("Finished generation:", nums)
    this.setState({numbers: nums})
}

sortNaive(){
    console.log("Naive Sort")
    this.setState({
        sorting: true,
        i: 0
    })
    // console.log("Finished Naive Sort")
}

naiveSortRepetition(){
    var index, i = this.state.i;
    var nums = [...this.state.numbers];
    index = nums.slice(i).indexOf(Math.min(...nums.slice(i)))

    var b = nums[index+i];
    nums[index+i] = nums[i];
    nums[i] = b;

    // [nums[index+], nums[index+i]] = [nums[index+i], nums[i]];

    i++;
    var h;
    if (this.state.history.length > this.state.l - 1){
        h = [nums]
    }
    else{
        h = [...this.state.history, nums];
    }
    this.setState({
              numbers: nums,
              i: i,
              history: h
            });
}

showHistory(e){
    this.setState({
        sliderValue: e
    })
}
render(){
    return(
        <div>
            <button onClick={() => this.generateNumbers()}>Generate random numbers to sort</button>
            <div className="row sort-container">
                <div className="row full">
                    {
                        this.state.numbers.map((n) => <div className="sort-item" style={n>0 ? {backgroundColor: "white", color: "black"} : {backgroundColor: "red", color: "white"}}>{n}</div>)
                    }
                </div>
            </div>
            <button onClick={() => this.sortNaive()}>Sort Naively O(n<sup>2</sup>)</button>
            {/* <div>
                {
                    this.state.history.map((row) => {
                        return(
                            <div className="row medium">
                                {row.map((n) => <div className="sort-item">{n}</div>)}
                            </div>
                        )
                    })
                }
            </div> */}
            {/* visualize the history */}
            <input type="range" defaultValue="1" min="1" max={this.state.l} onInput={(e) => this.showHistory(e.target.value)} onChange={(e) => this.showHistory(e.target.value)}></input>
            <div className="row">
                <div className="graph-container">
                    { this.state.history[this.state.sliderValue-1] ? this.state.history[this.state.sliderValue-1].map((item) => {
                        if (item < 0){
                            return(
                                <div className="sort-graph-item" style={{height: (-item*15 + 20), backgroundColor: "red"}}>
                                    {item}
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="sort-graph-item" style={{height: (item*15 + 20), backgroundColor: "white", color: "black"}}>
                                    {item}
                                </div>
                            )
                        }
                    })
                    :
                    null
                    }   
                </div>
            </div>
            {/* <button onClick={() => this.generateNumbers()}>Generate random numbers to sort</button> */}
        </div>
    )
}

}

export default Sorting;