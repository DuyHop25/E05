import { question } from "readline-sync"
/**
 * Kiểm tra số nguyên m hợp lệ
 * @returns trả về số nguyên m người dùng nhập
 */
function checkM() : Number{
	let m: Number = 0;
    do {
        m = Number(question("Nhap m: "));
    } while ( m < 0);
    
    return m;
}
/**
 * Kiểm tra số nguyên n hợp lệ
 * @returns trả về số nguyên người n dùng nhập
 */
function checkN() : Number{
	let n: Number = 0;
    do {
        n = Number(question("Nhap n: "));
    } while ( n < 0);
    
    return n;
}


/**
 * Kiểm trả số nguyên tố 
 * @param N số nguyên người dùng nhập
 * @returns kết quả kiểm tra số nguyên tố 
 */
function CheckListSNT(m: Number, n: Number): string{
    let flag: boolean = true;
    let result: string = "";
    for(let i = Number(m); i <= n; i++){
        flag = true;
        for(let j = 2 ; j <= Math.sqrt(Number(i)) ; j++){
            if(Number(i) % j == 0 ){
                flag = false;
            } 
        }
        if(flag == true){
            result = result + i + ", ";
        }
    }
    return result;
}

/**
 * Hàm chạy chức năng kiểm tra số nguyên tố 
 */
function cnCheckListSNT() :void{
    let m: Number = checkM();
    let n: Number = checkN();
    console.log(CheckListSNT(m,n));
}
cnCheckListSNT();