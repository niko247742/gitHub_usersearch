class GitHub {
    constructor() {
        this.client_id = 'eb51476de553af8db4cb';
        this.client_secret = 'be7da7b41f8b11659a138bc114e69babacc12ef5';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile: profile,
            repos: repos
        }
    }
}