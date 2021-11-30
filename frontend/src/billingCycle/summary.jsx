import React, { Component } from 'react';

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credits, debts}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resume</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${credits}`} text='Credits Amount' />
                <ValueBox cols='12 4' color='red' icon='bank'
                    value={`R$ ${debts}`} text='Debits Amount' />
                <ValueBox cols='12 4' color='blue' icon='bank'
                    value={`R$ ${credits - debts}`} text='Consolidated Amount' />

            </Row>
        </fieldset>
    </Grid>
)

