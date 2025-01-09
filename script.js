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
    var description = document.getElementById('description').value;

    // Xử lý dữ liệu (ví dụ: lưu vào cơ sở dữ liệu hoặc hiển thị thông báo)
    console.log('Tiêu đề:', title);
    console.log('Ngôn ngữ:', language);
    console.log('Mô tả:', description);

    // Reset form sau khi gửi
    document.getElementById('createListForm').reset();
    document.getElementById('createListSection').classList.add('hidden'); // Ẩn form sau khi tạo
});
