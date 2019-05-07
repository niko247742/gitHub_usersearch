//Init GitHub Class
const gitHub = new GitHub;

//Init UI Class
const uI = new UI;

//Search Input

const searchUser = document.getElementById('searchUser');

//Search Input Event Listener

searchUser.addEventListener('keyup', (e) => {
    //Get Input Text
    const userText = e.target.value;

    if(userText !== '') {
        gitHub.getUser(userText).then(data => {
            if(data.profile.message === "Not Found") {
                uI.showAlert("User not found", "alert alert-danger");
            } else {
                //Show User Profile
                uI.showProfile(data.profile);
                uI.showRepos(data.repos);

            }
        })
    } else {
        uI.clearProfile();
    }

});