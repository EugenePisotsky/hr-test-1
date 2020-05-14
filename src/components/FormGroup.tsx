import * as React from "react";

export function FormGroup({ children, label }: any) {
    return <div className={'form-group'}>
        <label>{ label }</label>
        { children }
    </div>
}