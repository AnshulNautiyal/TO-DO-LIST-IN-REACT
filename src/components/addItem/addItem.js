import React from 'react';


class AddItem extends React.Component {
    
    state = {
        task :'',
        showErrorMessage : false
    }

    handleSubmit = (event) => {

        event.preventDefault();
        if (this.state.task.length < 1){
            this.setState(prevSate => {
                return {
                    showErrorMessage: !prevSate.showErrorMessage
                }
            })
            return;
        }

        this.props.addItem(this.state);
        this.setState({
            task: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            task : event.target.value,
            showErrorMessage:false
        })
    }
    render(){

        return (

            <form className="container" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className="label">Add Item</label>
                    <div className="control" >
                        <input style={this.state.showErrorMessage ? { border: '1px solid red' } : { border: ''} }  
                                className="input" type="text" placeholder="Add Task..." 
                                name="item" onChange={this.handleChange}
                                value={this.state.task}    
                                />
                    </div>
                    {
                        this.state.showErrorMessage && <p className="help" style={{color:'red'}}>Please add the item.</p>
                    }
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-success">
                            ADD
                        </button>
                    </p>
                </div>
            </form>
        )
    }


}

export default  AddItem;