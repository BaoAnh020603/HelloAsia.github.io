// Xử lý đăng nhập khi người dùng nhấn nút submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngừng việc tải lại trang

    // Lấy giá trị tên đăng nhập và mật khẩu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập (thay thế với dữ liệu thực tế hoặc API)
    if (username === "DNTU" && password === "BuddiesTeam") {
        // Nếu thông tin đúng, chuyển hướng tới index.html
        window.location.href = "index.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
});
