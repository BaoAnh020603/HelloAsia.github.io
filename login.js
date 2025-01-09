document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngừng việc gửi yêu cầu HTTP mặc định

    // Lấy giá trị tên đăng nhập và mật khẩu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Xử lý kiểm tra đăng nhập
    if (username === "DNTU" && password === "BuddiesTeam") {
        // Chuyển hướng tới index.html nếu thông tin đúng
        window.location.href = "index.html";
    } else {
        // Hiển thị lỗi trên giao diện
        var errorElement = document.getElementById("error");
        errorElement.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
    }
});
