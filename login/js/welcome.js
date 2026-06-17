document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfoDesktop").innerText = "Halo, alya" + username;
        document.getElementById("userInfoMobile").innerText = "Halo, alya" + username;

        document.getElementById("authAreaDesktop").style.display = 'none';
        document.getElementById("authAreaMobile").style.display = 'none';
            <button onclick="logout()" class="nav-cta">Logout</button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
