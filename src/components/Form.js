import React from 'react';
const style = {
    input:{
        width: 'calc(100% - 58px)',
        marginTop: 8
    }
};
class Form extends React.Component{
    render(){
        return(
            <div>
                <input  style={style.input}
                        ref={(input) => this.name = input}
                        defaultValue={this.props.value}                      
                        type="text"/>
                    <button 
                        onClick={() => { 
                            this.props.add(this.name.value);
                            this.name.value="";
                        }}>Inserir</button>
            </div>
        );
    }
}

export default Form;