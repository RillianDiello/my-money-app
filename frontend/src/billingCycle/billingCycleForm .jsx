import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleAction';
import ItemList from './itemList';

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Name' cols='12 4' placeholder='Enter a name' />
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                        label='Month' cols='12 4' placeholder='Enter a month' type='number' />
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                        label='Year' cols='12 4' placeholder='Enter a year' type='number' />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Credits' showStatus={true}></ItemList>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Debts' showStatus={true}></ItemList>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}
                    >Cancel</button>
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)