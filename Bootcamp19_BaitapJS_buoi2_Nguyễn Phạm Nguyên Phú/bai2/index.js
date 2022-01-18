let n = prompt("Hãy cho biết người đang sử dụng máy");

switch (n) {
    case "bố":
        {
            console.log("Chào bố");
            break;
        }
    case "mẹ":
        {
            console.log("Chào mẹ");
            break;
        }
    case "anh trai":
        {
            console.log("Chào anh");
            break;
        }
    case "em gái":
        {
            console.log("Chào em");
            break;
        }
    default:
        {
            console.log("Tên không hợp lệ")
        }
}