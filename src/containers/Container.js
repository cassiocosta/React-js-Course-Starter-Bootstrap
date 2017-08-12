
import React from 'react';
import List from '../components/List';
import Form from '../components/Form';

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
        this.getAll();
    }
    
    add(value){

        let values = localStorage.getItem('items');

        if(values !== null)
            values = JSON.parse(values);
        else
            values = [];

        values.push({ name: value });

        localStorage.setItem('items',JSON.stringify(values));

        this.setState({items: values});

    }

    remove(name){
        let values = localStorage.getItem('items');

        if(values !== null)
            values = JSON.parse(values);
        else
            values = [];

        values = values.filter((element)=> element.name !== name);
        localStorage.setItem("items", JSON.stringify(values));

        this.setState({items: values});

    }

    update(name, newName){
        let values = localStorage.getItem('items');

        if(values !== null)
            values = JSON.parse(values);
        else
            values = [];

        values = values.map((element) => {
            if(element.name === name)            
                element.name = newName;
            return element;
                
        });

        localStorage.setItem("items", JSON.stringify(values));

        this.setState({items: values});
    }

    getAll(){
        let values = localStorage.getItem("items");

        if(values !== null)
            this.setState({ items: JSON.parse(values)});
    }

    render(){
        return(
            <div style={style}>
                <List
                    remove = {this.remove.bind(this)} 
                    update = {this.update.bind(this)}
                    data={this.state.items} />
                <Form add={this.add.bind(this)}/>
            </div>
        );
    }
}

export default Container;