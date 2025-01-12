// Hiển thị modal
document.getElementById('create-list-btn').addEventListener('click', function () {
    document.getElementById('form-modal').style.display = 'flex'; // Hiển thị modal
});

// Đóng modal
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('form-modal').style.display = 'none'; // Ẩn modal
});

// Đóng modal khi nhấn ngoài modal
window.addEventListener('click', function (event) {
    const modal = document.getElementById('form-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
