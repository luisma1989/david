import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import IntlWrapper from './Intl/IntlWrapper'
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from './components/Header'
import Subheader from './components/Subheader'
import Countries from './components/Countries'
import About from './components/About'
import Experience from './components/Experience'
import Sentence from './components/Sentence'
import Social from './components/Social'
import LinksGalery from './components/LinksGalery'

import SecondSentence from './components/SecondSentence'
import Galery from './components/Galery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/core.css'

const App = props => {
  return (
    <IntlWrapper>
      <ParallaxProvider>
        <Router>
          <Switch>
            <Route exact path='/' render={() => {
                return (
                  <div>
                    <Header headerData={props.intl.messages.header} intl={props.intl} />
                    <Subheader subheaderData={props.intl.messages.subheader} />
                    <Countries countriesData={props.intl.messages.countries} />
                    <Experience experienceData={props.intl.messages.experience} />
                    <About aboutData={props.intl.messages.about} />
                    <Sentence sentenceData={props.intl.messages.sentence} />
                    <Social />
                    <SecondSentence secondSentenceData={props.intl.messages.secondSentence} />
                    <LinksGalery linksGaleryData={props.intl.messages.linksGalery} />
                  </div>
                )
              }} />
            <Route path='/events' render={() => <Galery />} />
            <Route path='/plates' render={() => <About />} />
          </Switch>
        </Router>
      </ParallaxProvider>
    </IntlWrapper>
  )
}

App.propTypes = {
  intl: PropTypes.object.isRequired
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  }
}

export default connect(mapStateToProps)(App)
