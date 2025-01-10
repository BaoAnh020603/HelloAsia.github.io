 <!-- JavaScript -->
    <script>
        function openModal() {
            document.getElementById('createListModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('createListModal').classList.remove('active');
        }

        document.getElementById('create-list-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Danh sách của bạn đã được lưu!');
            closeModal();
        });
    </script>
