import React, { Component } from "react";
 
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task">
          </input>
            <button type="submit">add</button>
          </form>
        </div>
		<TodoItems entries={this.state.items}/>
		<TodoItems entries={this.state.items}
                 delete={this.deleteItem}/>
      </div>
    );
  }
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
  
}
class TodoList extends Component {
  constructor(props) {
    super(props);
 
    this.addItem = this.addItem.bind(this);
  }
   addItem(e) {
	   if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
   }
   var newItem = {
  text: this._inputElement.value,
  key: Date.now()
};
this.setState((prevState) => {
  return { 
    items: prevState.items.concat(newItem) 
  };
});
e.preventDefault();

};
createTasks(item) {
  return <li key={item.key}>{item.text}</li>
}
return (
  <ul className="theList">
      {listItems}
  </ul>
);
}
deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}
constructor(props) {
  super(props);
 
  this.state = {
    items: []
  };
 
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
}


 
export default TodoList;