# Lovecrafted - Handcrafted Shopping Website

A beautiful Next.js e-commerce website for Lovecrafted, showcasing handcrafted phone cases, bookmarks, craft items, and personalized gifts.

## Features

- 🛍️ **Modern E-commerce Design** - Clean, responsive shopping experience
- 📱 **Mobile-First** - Optimized for all devices
- 🎨 **Beautiful UI** - Custom design with Tailwind CSS
- 📸 **Instagram Integration** - Social media showcase section
- 🏷️ **Product Categories** - Organized browsing experience
- ⚡ **Fast Performance** - Built with Next.js 14
- 🔍 **SEO Optimized** - Meta tags and structured data

## Product Categories

- **Phone Cases** - Handcrafted phone cases with unique designs
- **Craft Items** - Decorative and functional handmade items
- **Bookmarks** - Elegant bookmarks for book lovers
- **Personalized Gifts** - Custom gifts with personalization options

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Inter & Playfair Display

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lovecrafted
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lovecrafted/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ProductCard.tsx    # Product display card
│   ├── FeaturedProducts.tsx # Featured products section
│   ├── Categories.tsx     # Category showcase
│   ├── InstagramSection.tsx # Social media section
│   └── Footer.tsx         # Site footer
├── data/                  # Static data
│   └── products.ts        # Product information
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── public/                # Static assets
    └── images/            # Product images
```

## Adding Product Images

1. Place your product images in the `public/images/` directory
2. Update the image paths in `data/products.ts`
3. Recommended image format: JPG/PNG, 800x800px minimum

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your brand colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Instagram Integration
Update the Instagram handle and posts in `components/InstagramSection.tsx`:
```javascript
const instagramPosts = [
  // Your Instagram posts
]
```

### Contact Information
Update contact details in `components/Footer.tsx`:
- Email: hello@lovecrafted.com
- Phone: +1 (234) 567-890
- Address: 123 Craft Street, Artisan City, AC 12345

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

## Social Media

- **Instagram**: @lovecrafted
- **Facebook**: @lovecrafted
- **Twitter**: @lovecrafted

## License

This project is licensed under the MIT License.

## Support

For support, email hello@lovecrafted.com or create an issue in the repository.

---

Made with ❤️ by Lovecrafted
