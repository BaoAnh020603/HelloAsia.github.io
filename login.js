document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form gửi dữ liệu đi mặc định

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra tài khoản đăng nhập
    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // Chuyển hướng đến trang chính
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
});

