// import { NextResponse, NextRequest } from "next/server";
// import { db } from "../../database";
// import { User } from "../../models";
// import bcrypt from "bcryptjs"
// import { jwt } from "../../utils"
// // import { messages } from "../../../utils";



// export async function POST(req: NextRequest, res: NextResponse) {

//     const { newPassword } = req.body;

//     const { token } = req.cookies;

//     let userId = "";

//     if (!newPassword) {
//         return NextResponse.json({ message: `La nueva contraseña es requerida.` }, { status: 400 });
//     }
//     if (!token) {
//         return NextResponse.json({ message: `No hay token.` }, { status: 400 });
//     }

//     try {

//         userId = await jwt.isValidToken(token)
//         await db.connect()

//         const user = await User.findById(userId)
//         if (!user) {
//             return NextResponse.json({ message: `Usuario no encontrado.` }, { status: 400 });
//         }

//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         user.password = hashedPassword

//         const UserSave = await user.save()


//         return new Response(JSON.stringify(UserSave), {
//             status: 201,
//             headers: { 'Content-Type': 'application/json' }
//         });
//     } catch (error) {
//         console.log(error);
//         return new Response(JSON.stringify(error), {
//             status: 201,
//             headers: { 'Content-Type': 'application/json' }
//         });
//     }
// }
