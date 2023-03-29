import { question } from "readline-sync"
/**
 * Kiểm tra số nguyên hợp lệ
 * @returns trả về số nguyên người dùng nhập
 */
function checksoNguyen() : Number{
	let N: Number = 0;
    do {
        N = Number(question("Nhap mot so nguyen: "));
    } while ( N < 0);
    
    return N;
}

/**
 * Kiểm trả số nguyên tố 
 * @param N số nguyên người dùng nhập
 * @returns kết quả kiểm tra số nguyên tố 
 */
function CheckSNT(N:Number): string{
    let dem: Number = 0;
    for (let i = 2; i <= Math.sqrt(Number(N)); i++) {
        if(Number(N) % i == 0)
            dem = Number(dem) + 1;
    }
    if(dem == 0)
        return "Yes" ;
    else    
        return "No";

}

/**
 * Hàm chạy chức năng kiểm tra số nguyên tố 
 */
function cnCheckSNT() :void{
    let N: Number = checksoNguyen();
    console.log(CheckSNT(N));
}
cnCheckSNT();