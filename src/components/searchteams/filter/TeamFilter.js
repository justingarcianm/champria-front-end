import React, { Component } from 'react';
import TeamFilterBox from './TeamFilterBox'
import TeamSelectBox from './TeamSelectBox'

export default class TeamFilter extends Component {
    render() {
        return (
            <div>
                TeamFilter
                <TeamFilterBox/>
                <TeamSelectBox/>
            </div>
        );
    }
}
