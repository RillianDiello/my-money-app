import React, { Component } from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/grid";
import Input from "../common/form/Input";

class CreditList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input}
                    placeholder='Set Name' readOnly={this.props.readOnly}
                ></Field></td>
                <td><Field name={`credits[${index}].value`} component={Input}
                    placeholder='Set Value' readOnly={this.props.readOnly}></Field></td>
            </tr>
        ))
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList