<script>
    document.getElementById("createListBtn").addEventListener("click", function () {
        const container = document.getElementById("createListContainer");

        // Nếu nội dung đã được tải, chỉ toggle hiển thị
        if (container.innerHTML.trim()) {
            container.classList.toggle("hidden");
            return;
        }

        // Tải nội dung từ CreateList.html
        fetch("CreateList.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Không thể tải nội dung từ CreateList.html");
                }
                return response.text();
            })
            .then(data => {
                container.innerHTML = data; // Chèn nội dung vào container
                container.classList.remove("hidden"); // Hiển thị container
            })
            .catch(error => {
                console.error("Error loading CreateList.html:", error);
                container.innerHTML = "<p>Không thể tải nội dung. Vui lòng thử lại sau.</p>";
            });
    });
</script>

