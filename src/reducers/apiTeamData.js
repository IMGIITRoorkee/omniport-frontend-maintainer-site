import { RECEIVE_TEAM_DATA, ERROR_OCCURED } from "../actions/apiTeamCall"

const apiTeamData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case RECEIVE_TEAM_DATA:
            return {
                ...state,
                data: action.data,
                url: action.url,
                loaded: true,
            }
        case ERROR_OCCURED:
            return {
                ...state,
                url: action.url,
                error: action.error,
            }
        default:
            return state
    }
}

export default apiTeamData