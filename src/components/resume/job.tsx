import React from 'react'
import Badge from 'react-bootstrap/Badge'
import JobProps from '../../models/job'

export const Job: React.FC<JobProps> = props => (
    <React.Fragment>
        <Badge variant="dark" className="badge float-right bg-medium">
            {props.timeframe}
        </Badge>
        <h5>
            {props.title} -{' '}
            <span className="font-weight-normal">{props.company}</span>
        </h5>
        {
            props.previousTimeFrame &&
            <Badge variant="dark" className="badge float-right bg-medium">
                {props.previousTimeFrame}
            </Badge>
        }
        {
            props.previousTitle &&
            <h5>
                {props.previousTitle}
            </h5>
        }
        {
            props.summary &&
            <p className="font-weight-light">{props.summary}</p>
        }
        {
            props.summaryList &&
            <ul>
                {props.summaryList.map((summaryItem: string) => <li className="font-weight-light">{summaryItem}</li>)}
            </ul>
        }
    </React.Fragment>
)

export default Job
