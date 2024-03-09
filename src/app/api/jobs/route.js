
import Job from "@/models/jobsModel";
import { connect } from "@/utils/connectDB/connectDb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request) {

    await connect()
    try {
        const body = await request.json();
        const {
            title,
            aboutwork,
            aboutcompany,
            skills,
            numberofopening,
            status,
            jobtype,
            locationtype,
            jobtimetype,
            duration,
            location,
            salary
        } = body;

        const response = await Job.create({
            title,
            aboutwork,
            aboutcompany,
            skills,
            numberofopening,
            status,
            jobtype,
            locationtype,
            jobtimetype,
            duration,
            location,
            salary

        });
        console.log(response)
        // Return success response
        return NextResponse.json({
            message: "Job created successfully",
            success: true,
            response
        });

    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({
            error: error.message
        });
    }
}

export async function GET(request) {

    try {
        await connect()
        const searchParams = request.nextUrl.searchParams || "";
        // const countrySearch = req.query.country || "";
        const page = Number(searchParams.get('page'))
        const limit = Number(searchParams.get('limit'))


        const filters = { ...request.searchParams };

        const excludeFields = ['page', 'limit', 'type', 'title', 'jobtimetype', 'locationtype']

        excludeFields.forEach(field => delete filters[field]);

        const queries = {};

        //type search
        if (searchParams.get('type')) {
            const type = searchParams.get('type')
            queries.type = type
        };
        //title search
        if (searchParams.get('title')) {
            const titleSearch = searchParams.get('title')
            queries.title = { $regex: titleSearch, $options: "i" }
        };
        //jobtimetype search
        if (searchParams.get('jobtimetype')) {
            const jobtimetype = searchParams.get('jobtimetype')
            queries.jobtimetype = { $regex: jobtimetype, $options: "i" }
        };
        if (searchParams.get('locationtype')) {
            const locationtype = searchParams.get('locationtype')
            queries.locationtype = { $regex: locationtype, $options: "i" }
        };
        const jobs = await Job.find(queries, filters).limit(limit).skip((page - 1) * limit);

        // Count total documents based on the applied filters
        const totaljob = await Job.countDocuments(jobs);
        // Return success response
        return NextResponse.json({
            message: "successfully get jobs",
            success: true,
            data: jobs,
            length: jobs.length,
            pagination: {
                totalPage: Math.ceil(totaljob / limit),
                currentpage: page,
                previouspage: page - 1 > 0 ? page - 1 : null,
                nextpage: page + 1 <= Math.ceil(totaljob / limit) ? page + 1 : null,
            },
        });

    } catch (error) {
        console.error('Error getting jobs:', error);
        return NextResponse.json({
            message: error.message
        }, { status: 500 });

    }
}

