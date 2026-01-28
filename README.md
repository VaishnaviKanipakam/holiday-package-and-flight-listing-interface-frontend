## Project Overview

This project is a Holiday Package & Flight Listing Interface built using ReactJS.
It replicates a real-world travel booking dashboard where users can search holiday packages, view flight options, and compare fares.

## The focus of this assignment is:

- Translating UI design into code
- Component-based architecture
- Clean layout and styling
- Handling mock API data realistically

## Tech Stack

- ReactJS
- HTML5
- CSS3
- Tailwind CSS
- Material UI (MUI)

## Sidebar Navigation
The sidebar represents a real travel admin dashboard and includes:

- Dashboard
- Leads
- Itineraries
- Bookings
- Payments
- Reports

## Additional Sections:
- User Control (Users, Roles & Permissions)
- Participants (Customers, Agents, Vendors)
- Miscellaneous (Offers, Settings, Support)

## Header & Package Tabs

Holiday Tabs
- Indian Holidays
- International Holidays

Package Tabs
- Package with Flights
- Package without Flights

Active tab styling follows the provided design reference.

## Search & Filter Section

Users can filter packages using:
- Destination city
- Travel start date
- Passenger count
- Hotel rating (3★, 4★, 5★)

A Search button triggers flight/package results.

## Flight Data (Mock API)

- Flight data is mocked using static JSON
- This simulates a real backend API response
- Each flight includes:
    - Airline name & logo
    - Flight number
    - Route
    - Timings
    - Duration
    - Fare
    - Baggage
    - Stops

In production, this can be easily replaced with real APIs such as Amadeus or AviationStack.

## Fare Summary Section

Displays:
- Selected departure flight
- Selected return flight
- Individual fares
- Total round-trip fare for passengers

## Styling & UI

- Tailwind CSS for layout and spacing
- Material UI for buttons, icons, and avatars
- Card-based UI for flight listings
- Smooth hover and load animations
- Clean visual hierarchy

## Animations

- Hover lift and shadow on cards
- Fade-in animation for flight listings
- GPU-friendly animations using transform and opacity

## How to Run the Project

Clone the repository

Install dependencies
- npm install

Start the development server
- npm start

Open in browser
- http://localhost:3000

## Key Design Decisions

- Used mock data to focus on UI and UX
- Followed real travel booking workflows
- Designed components to be API-ready
- Ensured clean separation of concerns

## Notes

- This project focuses on UI implementation
- No payment gateway or real booking flow is included
- Flight prices and schedules are for demonstration only

## Live Link
- https://holiday-package-and-flight-listing.vercel.app/ 
