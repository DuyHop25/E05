import { question } from "readline-sync";

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

xinChao("Hop",2003);


