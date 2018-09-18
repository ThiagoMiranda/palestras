import React, { Component, Fragment } from 'react';

import Middle from '../components/Middle/Middle'
import PageMenu from '../components/PageMenu/PageMenu'
import Banner from '../components/Banner/Banner'
import Delivery from '../components/Delivery/Delivery'
import Categories from '../components/Categories/Categories'

import '../assets/styles/main_styles.css';

class Main extends Component {
  render() {
    return (
        <Fragment>
            <Middle/>
            <PageMenu/>
            <Banner/>
            <Delivery/>
            <Categories/>
        </Fragment>
    );
  }
}

export default Main;
