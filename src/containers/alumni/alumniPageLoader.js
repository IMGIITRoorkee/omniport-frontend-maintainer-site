import { connect } from "react-redux"
import { requestAlumniData } from "../../actions/apiAlumniCall"

import Alumni from "../../components/alumni/alumni-page"

const mapStateToProps = state => {
    return {
        apiAlumniData: state.apiAlumniData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestAlumniData: url => {
            dispatch(requestAlumniData(url))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Alumni)
