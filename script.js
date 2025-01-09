document.getElementById('uploadButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileUpload');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var content = e.target.result;
            var lines = content.split('\n'); // Tách nội dung thành từng dòng

            // Xóa nội dung cũ
            var flashcardContainer = document.getElementById('flashcardContainer');
            flashcardContainer.innerHTML = '';

            // Thêm từng dòng vào flashcard
            lines.forEach(function(line) {
                if (line.trim()) { // Kiểm tra dòng không rỗng
                    var flashcard = document.createElement('div');
                    flashcard.className = 'flashcard';
                    flashcard.innerHTML = `<h3>${line}</h3>`;
                    flashcardContainer.appendChild(flashcard);
                }
            });
        };

        reader.readAsText(file); // Đọc file dưới dạng văn bản
    } else {
        alert('Vui lòng chọn một file.');
    }
});
