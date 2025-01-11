document.getElementById('createListForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    // Lấy giá trị từ form
    const title = document.getElementById('title').value;
    const language = document.getElementById('language').value;
    const description = document.getElementById('description').value;

    // Encode các giá trị trước khi thêm vào URL
    const encodedTitle = encodeURIComponent(title);
    const encodedLanguage = encodeURIComponent(language);
    const encodedDescription = encodeURIComponent(description);

    // Tạo URL mới với các tham số
    const newUrl = `${window.location.origin}${window.location.pathname}?title=${encodedTitle}&language=${encodedLanguage}&description=${encodedDescription}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    // Hiển thị thông tin đã lưu ngay trên trang
    displaySavedList(title, language, description);
});

function displaySavedList(title, language, description) {
    // Cập nhật nội dung hiển thị
    document.getElementById('savedTitle').innerText = title;
    document.getElementById('savedLanguage').innerText = language;
    document.getElementById('savedDescription').innerText = description;

    // Hiển thị phần danh sách đã lưu
    document.getElementById('savedList').classList.remove('hidden');
}

// Kiểm tra nếu có thông tin trong URL khi tải trang
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const language = urlParams.get('language');
    const description = urlParams.get('description');

    if (title && language && description) {
        displaySavedList(decodeURIComponent(title), decodeURIComponent(language), decodeURIComponent(description));
    }
};

