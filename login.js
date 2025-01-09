// Kiểm tra nếu đã đăng nhập, chuyển hướng đến trang chính ngay lập tức
if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "index.html";
}

// Xử lý sự kiện khi người dùng nhấn nút đăng nhập
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngừng việc gửi form mặc định

    // Lấy giá trị từ các trường input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập
    if (username === "DNTU" && password === "BuddiesTeam") {
        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem("loggedIn", "true");

        // Chuyển hướng tới trang index
        window.location.href = "index.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
});

