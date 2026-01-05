import { google } from "googleapis";
import { NextResponse } from "next/server";

const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL; // Email of the service account
const SERVICE_ACCOUNT_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY; // JSON key from Google Service Account
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID; // Email of the calendar

const auth = new google.auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar'],
})

const calendar = google.calendar({version: 'v3', auth})

