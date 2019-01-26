import React, { Component } from 'react';
import 'bulma';


import Header from '../header/header';
import List from '../list/list';
import AddItem from '../addItem/addItem';

class App extends Component {

  state = {
    toDoList: [
                {
                  task:'Complete React Course',
                  id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                },
                {
                  task: 'Start React Project',
                  id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                }
    ]
  }

  addItem = (itemToAdd) => { 
    // console.log(itemToAdd)
    itemToAdd.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.setState(prevSate => {
      return {
        toDoList: [...prevSate.toDoList, itemToAdd]
      }
    });

    // console.log(this.state)
  }
  handleDelete = (id) => {
    const afterDelete = this.state.toDoList.filter(item => {
      return item.id !== id;
    })

    this.setState({
      toDoList: afterDelete
    });
  }
  render() {
    return (
      <>
        <Header />
        <List toDoItem={this.state.toDoList} handleDelete={this.handleDelete}/>
        <div className="section">
          <AddItem addItem={this.addItem} />
        </div>
        
      </>
    );
  }
}

export default App;
