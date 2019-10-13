import React from 'react'

const RenderField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error
    }
}) => (
    <div className='"ui input focus"'>
        <label>{label}</label>
        <div>
            <input {...input}
                placeholder={label}
                type={type}
                style={
                    {margin: "20px 0px 20px 0px"}
                }/> {
            touched && error && <div className="ui error message"
                style={
                    {marginBottom: "20px"}
            }>
                <div className="header">
                    {error}</div>
            </div>
        } </div>
    </div>
)

export default RenderField
