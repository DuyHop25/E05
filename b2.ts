import { question } from "readline-sync";
/**
 * In ra lời chào giới thiệu thông tin
 * @param Name tên người dùng nhập
 * @param birthyear năm sinh người dùng nhập
 */
function xinChao(Name: string,birthyear : Number): void{
	// console.log`Xin chào, mình tên là {$Name}.`;
    console.log(`Xin chào, mình tên là ${Name}.`)
    console.log(`Mình sinh năm ${birthyear}.`) 
    console.log("Rất vui được gặp bạn.")
}
xinChao("Hop",2003);
