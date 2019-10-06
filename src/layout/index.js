import React, { Component,Fragment} from 'react'
import TabBar from "@common/tabBar"
export default class Layout extends Component {
    render() {
        console.log(this.props);
        let flag = this.props.meta.flag
        console.log(this.props)
        return (
            <Fragment>
                    {this.props.children}
                    {flag?<TabBar/>:""}
            </Fragment>
        )
    }
}

