import { question } from "readline-sync";
/**
 * Chuyển độ F thành độ C
 * @param doF Nhiệt độ F người dùng nhập
 * @returns kết quả từ độ F thành độ C
 */
function ChuyendoC(doF: Number): Number{
    return (5/9)*(Number(doF) - 32);
}
/**
 * Thực hiện chức năng hàm chuyển độ C
 */
function cnChuyendoC(): void{
    let doF: Number = Number(question("Nhap do F:"));
    console.log(ChuyendoC(doF));
}
cnChuyendoC();

