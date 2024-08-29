# Introduction - Travel Advisor OS
Travel Advisor OS is a web application built with Next.js, React, and TypeScript. It provides users with travel advice and information.

## Table of Content:

- [Getting Started](#Getting-Started)
- [Live Url](#Live-Url)
- [Technologies](#Built-With)
- [Setup](#Installation)
- [Status](#status)
- [Credits](#credits)
- [Authors](#Authors)


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Live Url:
Access travel advisor os at [travelOs.com](https://google.com)

### Prerequisites
- Node.js
- Yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://travelleadersgroup@dev.azure.com/travelleadersgroup/TravelAdvisorOS-Web/_git/TravelAdvisorOS-Web
   ```
 2. Install Packages
   ```sh
   yarn install
```

# Built With
- Next.js
- React
- TypeScript
- SCSS

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Notes
Type-casting : 
   you may find some type-casting in the codebase specifically in Array Response from a graphql response. This is b/c the graphql response does not strictly follow the rule not to return Nullable Array elements(e.g. [null, null, null]). The casting is a workaround to filter out the null elements from the array.

## Authors
A list of the authors of Travel Advisor OS-web 
- Henok Getachew ([@henzzo](https://github.com/obinasBaba))

# weather-app-test
