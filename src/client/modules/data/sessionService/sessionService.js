const URL = 'https://conference-lwc-app.herokuapp.com/api/sessions';
let sessions = [];
export const getSessions = () =>
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then(result => {
            sessions = result.data;
            return sessions;
        });
export const getSession = sessionId => {
    console.log('Finding id', sessionId);
    return sessions.find(session => {
        console.log('Comparing session', session);
        return session.id === sessionId;
    });
};
