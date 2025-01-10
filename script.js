 <script>
        document.getElementById('wordListForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const title = document.getElementById('title').value.trim();
            const language = document.getElementById('language').value;
            const description = document.getElementById('description').value.trim();

            if (!title) {
                alert('Vui lòng nhập tiêu đề!');
                return;
            }

            const wordList = document.getElementById('wordList');
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${title} (${language}) - ${description}`;

            wordList.appendChild(listItem);

            // Reset form và đóng modal
            document.getElementById('wordListForm').reset();
            const modal = bootstrap.Modal.getInstance(document.getElementById('createWordListModal'));
            modal.hide();
        });
    </script>
