// Lắng nghe sự kiện submit của form
document.getElementById('listForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị từ các trường nhập liệu
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;

    // Tạo một phần tử danh sách mới
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `<strong>${word}</strong>: ${definition}`;

    // Thêm phần tử danh sách vào danh sách hiển thị
    document.getElementById('wordList').appendChild(listItem);

    // Xóa nội dung của form sau khi lưu
    document.getElementById('listForm').reset();
});
