import React, { Fragment } from 'react'

import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import Middle from '../components/Middle/Middle'

import '../assets/styles/contact_styles.css';

const AboutUs = () => (
    <Fragment>
        <Middle/>
        <ContactInfo />
        <ContactForm />
    </Fragment>
)

export default AboutUs
