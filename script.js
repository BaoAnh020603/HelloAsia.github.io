<script>
    document.getElementById('basic-vocabulary-title').addEventListener('click', function() {
        const vocabularyList = document.getElementById('vocabulary-list');
        vocabularyList.style.display = vocabularyList.style.display === 'none' ? 'block' : 'none';
    });

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
        document .getElementById('vocabulary-list').style.display = 'block'; // Hiển thị danh sách từ vựng
    }
</script>
