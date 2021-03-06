import React from 'react'
import { Modal, Button } from 'antd'
import { Link, withRouter, Prompt, } from 'react-router-dom'
const confirm = Modal.confirm
// function setAsyncRouteLeaveHook(router, route, hook) {
//     let withinHook = false
//     let finalResult = undefined
//     let finalResultSet = false
//     router.setRouteLeaveHook(route, nextLocation => {
//         withinHook = true
//         if (!finalResultSet) {
//             hook(nextLocation).then(result => {
//                 finalResult = result
//                 finalResultSet = true
//                 if (!withinHook && nextLocation) {
//                     // Re-schedule the navigation
//                     router.push(nextLocation)
//                 }
//             })
//         }
//         let result = finalResultSet ? finalResult : false
//         withinHook = false
//         finalResult = undefined
//         finalResultSet = false
//         return result
//     })
// }
class AppleEdit extends React.Component {
    // mixins: [Lifecycle],
    componentDidMount() {
        // console.log(this);
        // setAsyncRouteLeaveHook(this.props.router, this.props.route, this.routerWillLeave)
        // this.props.router.setRouteLeaveHook(
        //     this.props.route, this.routerWillLeave
        // )
    }
    routerWillLeave() {
        //todo: hash
        // return '确定离开？'
        return new Promise((res, rej) => {
            confirm({
                title: '确定离开？',
                onOk: () => {
                    console.log('leave')
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            res();
                        }, 3000)
                    });
                    // res()
                },
                onCancel: () => {
                    console.log('stay')
                    // return false
                    rej()
                },
                okText: '确定',
                cancelText: '取消'
            })
        })

    }
    render() {
        return (
            <div>
                <Button>
                    <Link to={`/apple/list`} >back to application apple</Link>
                </Button>
                <p><strong>Edit</strong> area for apple</p>
            </div>)
    }
}
export default AppleEdit 