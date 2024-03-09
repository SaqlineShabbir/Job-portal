
// import { NextRequest, NextResponse } from "next/server";


// export async function POST(request) {

//     await connect()
//     try {
//         const body = await request.json();

//         const response = await Service.create({
//             title,
//             description,
//             price,
//             photo: cloudresult?.secure_url

//         });
//         console.log(response)
//         // Return success response
//         return NextResponse.json({
//             message: "Service created successfully",
//             success: true,
//             response
//         });

//     } catch (error) {
//         console.error('Error creating service:', error);
//         return NextResponse.json({
//             error: error.message
//         });
//     }
// }

// export async function GET(request) {
//     await connect()
//     try {

//         const services = await Service.find({})


//         // Return success response
//         return NextResponse.json({
//             message: "successfully get services",
//             success: true,
//             services
//         });

//     } catch (error) {
//         console.error('Error getting services:', error);
//         return NextResponse.json({
//             message: error.message
//         }, { status: 500 });

//     }
// }

