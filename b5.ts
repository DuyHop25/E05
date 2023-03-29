import { question } from "readline-sync";

/**
 * Kiểm tra tên hợp lệ từ bàn phím
 * @returns tên của người dùng 
 */
function checkName() : string{
	let Name: string = "";
    do {
         Name = question("Nhap ten: ");
    } while ( Name == "");
    
    return Name;
}

/**
 * Kiểm tra tên hợp lệ từ bàn phím
 * @returns năm sinh của người dùng
 */
function checkAge() :Number{
    let birthYear: Number = 0;
    do {
        birthYear = Number(question("Nhap nam sinh: "));
    } while ( birthYear < 0 || birthYear > 2023 );
    
    return birthYear;
}


/**
 * In ra lời chào giới thiệu thông tin
 * @param Name tên người dùng nhập
 * @param birthYear năm sinh người dùng nhập
 */
function xinChao(Name: string,birthYear : Number): Number{
	// console.log`Xin chào, mình tên là {$Name}.`;
    console.log(`Xin chào, mình tên là ${Name}.`)
    console.log(`Mình sinh năm ${birthYear}.`) 
    console.log("Rất vui được gặp bạn.")
    return 2023 - Number(birthYear);
}



/**
 * Hàm chạy chức năng xin chào 
 */
function cnXinChao() :void{
    let Name: string = checkName();
    let birthYear: Number = checkAge();
    console.log(xinChao(Name,birthYear));
}
cnXinChao();