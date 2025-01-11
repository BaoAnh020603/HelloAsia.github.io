// Lấy các phần tử cần thiết
const createListButton = document.getElementById("createListButton");
const popupForm = document.getElementById("popupForm");
const saveListButton = document.getElementById("saveListButton");
const listItemsContainer = document.getElementById("listItems");

// Hiển thị form khi nhấn vào "Tạo list từ"
createListButton.addEventListener("click", () => {
    popupForm.classList.remove("hidden");
});

// Thêm danh sách mới khi nhấn nút "Lưu"
saveListButton.addEventListener("click", () => {
    // Lấy giá trị từ form
    const title = document.getElementById("popupTitle").value;
    const language = document.getElementById("popupLanguage").value;
    const description = document.getElementById("popupDescription").value;

    // Kiểm tra xem tiêu đề đã được nhập chưa
    if (!title) {
        alert("Vui lòng nhập tiêu đề!");
        return;
    }

    // Tạo một thẻ list mới
    const newItem = document.createElement("div");
    newItem.classList.add("list-item");

    newItem.innerHTML = `
        <h3>${title}</h3>
        <p>Ngôn ngữ: ${getLanguageName(language)}</p>
        <p>${description ? description : "Không có mô tả"}</p>
    `;

    // Thêm danh sách mới vào container
    listItemsContainer.appendChild(newItem);

    // Ẩn form và xóa dữ liệu trong form
    popupForm.classList.add("hidden");
    document.getElementById("popupTitle").value = "";
    document.getElementById("popupLanguage").value = "en-us";
    document.getElementById("popupDescription").value = "";
});

// Hàm để chuyển mã ngôn ngữ thành tên ngôn ngữ
function getLanguageName(code) {
    switch (code) {
        case "en-us":
            return "Tiếng Anh-Mỹ";
        case "en-uk":
            return "Tiếng Anh-Anh";
        case "vi":
            return "Tiếng Việt";
        case "zh":
            return "Tiếng Trung";
        case "ko":
            return "Tiếng Hàn";
        default:
            return "Không xác định";
    }
}
