import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
const GoogleDetail = ({ params }) => {
    return (
        <div>
            <Button>
                <Link to={`/google/list`} >back to application google</Link>
            </Button>
            <p>it's <strong>Detail</strong> for google</p>
        </div>
    )
}
export default GoogleDetail 