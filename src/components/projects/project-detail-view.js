import React, { Component } from "react"
import { Header, Segment, Container, Search } from "semantic-ui-react"
import axios from "axios"

import common from "../../css/page-common-styles.css"

const slug = "something"

class ProjectDetailView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
        }
    }
    componentDidMount() {
        const { slug } = this.props.match.params
        const URL = `/api/maintainer_site/projects/${slug}`

        axios.get(URL).then(res => {
            this.setState(
                {
                    projects: res.data,
                },
                () => {}
            )
        })
    }

    render() {
        return (
            <div>
                <Container styleName="common.margin">
                    <Segment attached="top">
                        <Header as="h1">{this.state.projects.title}</Header>
                    </Segment>
                    <Segment attached />
                    <Segment attached="bottom">
                        <div
                            align="left"
                            dangerouslySetInnerHTML={{
                                __html: this.state.projects.longDescription,
                            }}
                        />
                    </Segment>
                </Container>
            </div>
        )
    }
}
export default ProjectDetailView
