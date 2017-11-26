const initialState = {
	comments: [],
	commentsIsLoading: true,
	commentsLoaded: 0,
	numComments: 0,
	page: 1
}

function comments( state = initialState, action ) {

	switch ( action.type ) {

		case 'FETCH_COMMENTS':

			return {
				...state,
				comments: [ ...state.comments, ...action.comments ],
				commentsIsLoading: false,
				commentsLoaded: [ ...state.comments, ...action.comments ].length
			}

		case 'INCREMENT_COMMENT_PAGE':

			return {
				...state,
				page: state.page + 1
			}

			return state;

		case 'SET_NUM_COMMENTS':

			return {
				...state,
				numComments: parseInt( action.numComments ),
			}

		case 'COMMENTS_IS_LOADING':

			return {
				...state,
				commentsIsLoading: action.commentsIsLoading
			}

		default:
			return state
	}
}

export default comments;