document.getElementById('listForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const word = document.getElementById('word').value; // Lấy giá trị từ input "word"
    const definition = document.getElementById('definition').value; // Lấy giá trị từ input "definition"

    if (word && definition) { // Kiểm tra nếu cả hai trường đều không rỗng
        const listItem = document.createElement('li'); // Tạo phần tử li
        listItem.className = 'list-group-item'; // Thêm lớp Bootstrap
        listItem.innerHTML = `<strong>${word}</strong>: ${definition}`; // Chèn nội dung

        document.getElementById('wordList').appendChild(listItem); // Thêm li vào ul
        document.getElementById('listForm').reset(); // Xóa nội dung form
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
    console.log(word, definition);
});
