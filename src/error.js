const errors = {'E001': 'There is a game in progress.',
                'E002': 'ID not specified.',
                'E003': 'Something went wrong.',
                'E004': 'Id is wrong.',
                'E005': 'Waiting on other player'};
                

function getError(errorCode) {
    return {'error': {
        'code': errorCode,
        'message': errors[errorCode]
    }};
};

module.exports = { getError };