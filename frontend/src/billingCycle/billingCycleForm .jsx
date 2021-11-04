import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleAction';
import CreditList from './creditList';

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Name' cols='12 4' placeholder='Enter a name' />
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                        label='Month' cols='12 4' placeholder='Enter a month' type='number' />
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                        label='Year' cols='12 4' placeholder='Enter a year' type='number' />
                        <CreditList cols='12 6' readOnly={readOnly}></CreditList>
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
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)