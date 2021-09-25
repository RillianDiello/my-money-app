import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    handleChangeMonth(e){
        console.log('caiu aki');
        // if (e.target.value.match("^[0-9]*$") != null) {
        //     this.setState({ Value: e.target.value });
        // }
    }
    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}
                        label='Name' cols='12 4' placeholder='Enter a name' />
                    <Field name='month' component={labelAndInput}
                        label='Month' cols='12 4' placeholder='Enter a month' type='number'/>
                    <Field name='year' component={labelAndInput}
                        label='Year' cols='12 4' placeholder='Enter a year' type='number'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)