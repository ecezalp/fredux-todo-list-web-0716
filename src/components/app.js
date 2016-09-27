import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onSubmitHandler(event){
    event.preventDefault()
    let action = {type: 'ADD_TODO', payload: this.refs.ourMessage.value}
    this.props.store.dispatch(action);
  }

  onClickHandler(todo){
      event.preventDefault()
      let action = {type: 'DELETE_MESSAGE', payload: todo}
      this.props.store.dispatch(action);
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.store.getState().map((todo) =>  <li> {todo}  <button onClick={() => this.onClickHandler(todo)}>Delete Button  </button> </li> )} 
        </ul> 
        <form onSubmit={this.onSubmitHandler}>
            <input ref="ourMessage"/>
        </form>
      </div>
    )
  }
}

export default App;