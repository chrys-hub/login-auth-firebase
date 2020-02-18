import React from 'react';
import '../App.css'
export default class Layout extends React.Component{
    render(){
        return(
            <div style={{height:`0px`}}>
                <div className="header">
                <h4>Navbar will be updated soon</h4>
                </div>
                <div >
                    {this.props.children}
                </div>
                <div className="footer">
                    <h4>Image source from <a href="https://icons8.com/icon/54396/google">Google icon by Icons8 <h4>& footer will be updated soon</h4></a></h4>
                </div>
            </div>
        );
    }
}