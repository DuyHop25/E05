import { question } from "readline-sync"
/**
 * Kiểm tra số nguyên a hợp lệ
 * @returns trả về số nguyên a người dùng nhập
 */
function checkA() : Number{
	let a: Number = 0;
    do {
        a = Number(question("Nhap a: "));
    } while ( a < 0);
    
    return a;
}
/**
 * Kiểm tra số nguyên b hợp lệ
 * @returns trả về số nguyên b người dùng nhập
 */
function checkB() : Number{
	let b: Number = 0;
    do {
        b = Number(question("Nhap b: "));
    } while ( b < 0);
    
    return b;
}


function SoSanh_AvaB(a:Number,b:Number): string{
    if(Number(a) > Number(b))
        return "Lớn";
    else if(Number(a) < Number(b))
        return "Nhỏ";
    else
        return "Bằng";
}

/**
 * Hàm chạy chức năng kiểm tra tam giác đều 
 */
function cnSoSanh_AvaB() :void{
    let a: Number = checkA();
    let b: Number = checkB();
    console.log(SoSanh_AvaB(a,b));
}
cnSoSanh_AvaB();