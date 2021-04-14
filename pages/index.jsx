import React, { Component } from 'react';
import {useState} from 'react';
import Button from './src/component/Button';
import ButtonErr from './src/component/Button';

class HomePage extends Component{
    render(){
        return(
            <section>
                <h1>Ola mundo</h1>
                <ButtonErr/>
            </section>
        )
        }

    }
    

export default HomePage;