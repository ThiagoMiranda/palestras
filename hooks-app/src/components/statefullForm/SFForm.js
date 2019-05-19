import React, { Component } from 'react'

export default class StatefullhtmlForm extends Component {

  state = {
    company: '',
    cnpj: '',
    address: '',
    windowWidth: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.onChangeWindowWidth, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onChangeWindowWidth)
  }

  onChangeWindowWidth = evt => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  onChangeInput = evt => {
    const { value, name } = evt.target
    this.setState(oldState => oldState[name] = value)
  }

  render() {
    const { company, cnpj, address, windowWidth } = this.state

    return (
      <form className='form'>
        <div className={'input-wrapper'}>
          <label htmlFor='company'>Empresa:</label>
          <input name='company' id='company' value={company} placeholder='Digite o nome da empresa' onChange={this.onChangeInput} />
          
          <label htmlFor='cnpj'>CNPJ:</label>
          <input name='cnpj' id='cnpj' value={cnpj} placeholder='Digite o CNPJ' onChange={this.onChangeInput} />

          <label htmlFor='address'>Endereço:</label>
          <input name='address' id='address' value={address} placeholder='Digite o endereço' onChange={this.onChangeInput} />
        </div>
        <div className='input-wrapper footer'>
          <button type="submit">Submit</button>
          <p>Tamanho: {windowWidth}</p>
        </div>
      </form>
    )
  }
}
