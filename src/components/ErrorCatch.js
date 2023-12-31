import React, { Component } from 'react'

export default class ErrorCatch extends Component {

    // constructor(props){
    //     super(props)
    //     this.state={
    //         hasError:false
    //     }
    // }

    state={
        hasError:false
    }
    
    static getDerivedStateFromError(error){
        console.log(error);
        if (error) {
         return  {hasError:true}
        }

    }
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }

  render() {
    if (this.state.hasError) {
        return(
            <>
            <h2>Error:Image Not Found</h2>
            </>
        )
    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
