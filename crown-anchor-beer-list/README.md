# Crown & Anchor Pub Beer List

A website for the Crown & Anchor pub in Monterey, CA to showcase their beer selection. This project is built with Next.js and TailwindCSS and is ready to be deployed on Vercel.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Beer list with filtering options (by type, on tap status)
- About section with pub information
- Location information with contact details
- Dark mode support

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd crown-anchor-beer-list
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Deploy to Vercel

The easiest way to deploy this application is to use the Vercel Platform:

1. Push this project to a GitHub repository.

2. Import the project to Vercel:
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository
   - Vercel will detect that it's a Next.js project and set up the build configuration automatically
   - Click "Deploy"

3. Your application will be deployed to a URL like `https://your-project-name.vercel.app`

### Environment Variables

No environment variables are required for this project.

## Customization

### Adding or Modifying Beers

To update the beer list, edit the `src/data/beers.ts` file. Each beer object has the following properties:

- `id`: Unique identifier
- `name`: Beer name
- `type`: Beer type (from BeerType enum)
- `abv`: Alcohol by volume percentage
- `description`: Beer description
- `origin`: Where the beer comes from
- `price`: Price in USD
- `onTap`: Boolean indicating if the beer is currently on tap

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (for deployment)

## License

This project is licensed under the MIT License.
