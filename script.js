document.getElementById('createListButton').addEventListener('click', function() {
    // Hiện phần tạo list từ
    document.getElementById('createListSection').classList.toggle('hidden');
});

// Xử lý sự kiện khi form được gửi
document.getElementById('createListForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị từ các trường nhập liệu
    var title = document.getElementById('title').value;
    var language = document.getElementById('language').value;
    var
