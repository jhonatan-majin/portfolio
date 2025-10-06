// import type { NextApiRequest, NextApiResponse } from "next";
// import { db } from "../../database";
// import { User } from "../../models";
// import { jwt } from "../../utils";

// type Data =
//  | {
//   ok: boolean;
//   message: string;
//  }
//  | {
//   token: string;
//   user: {
//    email: string;
//    role: string;
//    name: string;
//    image: string;
//   };
//  };

// export default function handler(
//  req: NextApiRequest,
//  res: NextApiResponse<Data>
// ) {
//  switch (req.method) {
//   case "GET":
//    return checkJWT(req, res);
//   default:
//    res.status(400).json({
//     ok: false,
//     message: messages.error.default,
//    });
//  }
// }

// const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//  const { token = "" } = req.cookies;

//  let userId = "";

//  try {
//   userId = await jwt.isValidToken(token);
//  } catch (error) {
//   return res.status(400).json({
//    ok: false,
//    message: messages.error.tokenNotValid,
//   });
//  }

//  db.connect();
//  const user = await User.findById(userId);
//  // db.disconnect()

//  if (!user) {
//   return res.status(400).json({
//    ok: false,
//    message: messages.error.userNotFound,
//   });
//  }

//  const { _id, email, role, name, image } = user;

//  return res.status(200).json({
//   ok: true,
//   message: messages.success.authorized,
//   token: jwt.signToken(_id, email),
//   user: {
//    name,
//    email,
//    role,
//    image,
//   },
//  });
// };
