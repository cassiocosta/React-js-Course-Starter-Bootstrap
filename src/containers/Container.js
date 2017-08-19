
import React from 'react';
import List from '../components/List';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { add, remove, update, getAll } from '../actions/todoAction';


const style = {
    width: 300,
    margin: 'auto'
}

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            items:[]
        };
    }

    componentDidMount(){
        this.props.getAll();
        
        setInterval(() => {
            this.props.getAll();
        }, 1000);
    }
    
    render(){
        const {
            items, 
            add, 
            remove, 
            update
        } = this.props;
        
        return(
            <div style={style}>
                <List
                    remove = {remove} 
                    update = {update}
                    data={items} />
                    
                <Form add={add}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.todos
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => {
            dispatch(add(value));
        },
        remove: (value) => {
            dispatch(remove(value));
        },
        update: (value, newName) => {
            dispatch(update(value, newName));
        },
        getAll: () => {
            dispatch(getAll());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Container);