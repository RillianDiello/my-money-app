import React, { Component } from 'react'


import axios from 'axios'


import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { credits: 0, debts: 0}
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(resp => this.setState(resp.data))
    }

    render() {
        const { credits, debts } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credits}`} text='Total Credits'></ValueBox>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debts}`} text='Total Debits'></ValueBox>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credits - debts}`} text='Curretl Balance'></ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}
