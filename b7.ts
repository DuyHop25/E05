import { question } from "readline-sync"
/**
 * Kiểm tra cạnh a hợp lệ
 * @returns trả về cạnh a người dùng nhập
 */
function checkA() : Number{
	let a: Number = 0;
    do {
        a = Number(question("Nhap a: "));
    } while ( a < 0);
    
    return a;
}
/**
 * Kiểm tra cạnh b hợp lệ
 * @returns trả về cạnh b người dùng nhập
 */
function checkB() : Number{
	let b: Number = 0;
    do {
        b = Number(question("Nhap b: "));
    } while ( b < 0);
    
    return b;
}
/**
 * Kiểm tra cạnh c hợp lệ
 * @returns trả về cạnh c người dùng nhập
 */
function checkC() : Number{
	let c: Number = 0;
    do {
       c = Number(question("Nhap c: "));
    } while ( c < 0);
    
    return c;
}

/**
 * Kiểm tra có phải tam giác đều không 
 * @param a cạnh a 
 * @param b cạnh b
 * @param c cạnh c
 * @returns Kết quả kiểm tra có phải tam giác đều không 
 */
function ChecktamgiacDeu(a:Number,b:Number,c:Number, ): string{
    if(Number(a) ==  Number(b) &&  Number(b) ==  Number(c))
        return "Yes";
    else 
        return "No";
}

/**
 * Hàm chạy chức năng kiểm tra tam giác đều 
 */
function cnChecktamgiacDeu() :void{
    let a: Number = checkA();
    let b: Number = checkB();
    let c: Number = checkC();
    console.log(ChecktamgiacDeu(a,b,c));
}
cnChecktamgiacDeu();