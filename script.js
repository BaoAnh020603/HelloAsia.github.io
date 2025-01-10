<script>
    document.getElementById("fileInput").addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                const vocabularyItems = content.split("\n").filter(item => item.trim() !== "");
                const vocabularyList = document.getElementById("vocabularyItems");
                vocabularyList.innerHTML = ""; // Clear previous items
                vocabularyItems.forEach(word => {
                    const li = document.createElement("li");
                    li.textContent = word;
                    vocabularyList.appendChild(li);
                });
                document.getElementById("vocabulary-list").style.display = "block";
            };
            reader.readAsText(file);
        }
    });
</script>
