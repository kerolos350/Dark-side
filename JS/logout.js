function logout() {
    // Set the cookie to expire in the past to delete it
    document.cookie = 'loged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}