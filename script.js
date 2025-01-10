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
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                displayVocabulary(content);
            };
            reader.readAsText(file);
        }
    });

    function displayVocabulary(content) {
        const vocabularyItems = document.getElementById('vocabularyItems');
        vocabularyItems.innerHTML = ''; // Xóa nội dung cũ
        const lines = content.split('\n'); // Tách nội dung theo dòng
        lines.forEach(line => {
            if (line.trim()) { // Kiểm tra dòng không rỗng
                const li = document.createElement('li');
                li.textContent = line.trim(); // Thêm từ vựng vào danh sách
                vocabularyItems.appendChild(li);
            }
        });
        document.getElementById('vocabulary-list').style.display = 'block'; // Hiển thị danh sách từ vựng
    }
});
