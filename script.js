document.getElementById('listForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị từ các trường
    const title = document.getElementById('title').value;
    const language = document.getElementById('language').value;
    const description = document.getElementById('description').value;

    // Tạo một phần tử danh sách mới
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `<strong>${title}</strong> (${language}): ${description}`;

    // Thêm phần tử danh sách vào danh sách hiển thị
    document.getElementById('listDisplay').appendChild(listItem);

    //
