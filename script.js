// Lấy form và các trường nhập liệu
const listForm = document.getElementById('listForm');
const wordInput = document.getElementById('word');
const definitionInput = document.getElementById('definition');
const wordList = document.getElementById('wordList');

// Lắng nghe sự kiện submit của form
listForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (tải lại trang)

    // Lấy giá trị nhập từ form
    const word = wordInput.value;
    const definition = definitionInput.value;

    // Tạo phần tử li mới
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `<strong>${word}</strong>: ${definition}`;

    // Thêm li vào danh sách
    wordList.appendChild(li);

    // Xóa dữ liệu trong form sau khi thêm
    wordInput.value = '';
    definitionInput.value = '';
});
