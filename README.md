# Medical Service Frontend

A modern Next.js frontend application for a medical service management system, built with TypeScript, GraphQL, and Tailwind CSS.

## Features

- 🏥 Patient Management
- 👨‍⚕️ Doctor Directory
- 📅 Appointment Scheduling
- 🔄 Real-time GraphQL Integration
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔒 Type-safe with TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Data Fetching**: Apollo Client with GraphQL
- **Styling**: Tailwind CSS
- **State Management**: Apollo Cache + React Hooks
- **Date Handling**: date-fns
- **Code Generation**: GraphQL Code Generator

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend GraphQL API running (your separate repository)

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update the environment variables:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

Replace the endpoint with your actual GraphQL API URL.

### 3. Generate GraphQL Types (Optional)

If you want to generate TypeScript types from your GraphQL schema:

```bash
npm run codegen
```

This will:
- Fetch your GraphQL schema
- Generate TypeScript types
- Create React hooks for queries/mutations

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with Apollo Provider
│   ├── page.tsx             # Dashboard/Home page
│   ├── patients/            # Patient management pages
│   └── appointments/        # Appointment pages
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Loading.tsx
│   ├── layout/              # Layout components
│   │   ├── Navigation.tsx
│   │   └── MainLayout.tsx
│   ├── patients/            # Patient-specific components
│   │   └── PatientList.tsx
│   └── appointments/        # Appointment-specific components
│       └── AppointmentForm.tsx
├── lib/
│   ├── apollo-client.ts     # Apollo Client configuration
│   └── graphql/
│       ├── queries.ts       # GraphQL queries and mutations
│       └── generated/       # Auto-generated types (after codegen)
├── hooks/
│   └── useGraphQL.ts        # Custom React hooks for GraphQL
└── types/
    └── medical.ts           # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run codegen` - Generate GraphQL types

## GraphQL Integration

### Apollo Client Setup

The Apollo Client is configured in `src/lib/apollo-client.ts` with:
- Automatic error handling
- Cookie-based authentication support
- Optimized caching strategies

### Custom Hooks

Use the custom hooks from `src/hooks/useGraphQL.ts`:

```typescript
// Fetch patients
const { data, loading, error } = usePatients()

// Fetch single patient
const { data } = usePatient(patientId)

// Create appointment
const [createAppointment] = useCreateAppointment({
  onCompleted: (data) => {
    console.log('Appointment created:', data)
  }
})
```

### Adding New Queries

1. Define the query in `src/lib/graphql/queries.ts`:

```typescript
export const GET_MY_QUERY = gql`
  query GetMyQuery($id: ID!) {
    myQuery(id: $id) {
      id
      field1
      field2
    }
  }
`
```

2. Create a custom hook in `src/hooks/useGraphQL.ts`:

```typescript
export const useMyQuery = (id: string) => {
  return useQuery<{ myQuery: MyType }>(GET_MY_QUERY, {
    variables: { id },
    skip: !id,
  })
}
```

3. Use in your component:

```typescript
const { data, loading, error } = useMyQuery(id)
```

## Customization

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      },
    },
  },
}
```

### Adding New Features

1. Create types in `src/types/`
2. Define GraphQL queries in `src/lib/graphql/queries.ts`
3. Create custom hooks in `src/hooks/`
4. Build UI components in `src/components/`
5. Create pages in `src/app/`

## Connecting to Your Backend

Ensure your backend GraphQL API:

1. **Supports CORS** for the frontend URL
2. **Implements the schema** matching the queries in this project
3. **Handles authentication** (cookies/tokens)
4. **Returns proper error responses**

Example backend schema requirements:

```graphql
type Patient {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  phone: String!
  dateOfBirth: String!
  gender: Gender!
}

type Query {
  patients(limit: Int, offset: Int): [Patient!]!
  patient(id: ID!): Patient
}

type Mutation {
  createPatient(input: CreatePatientInput!): Patient!
}
```

## Production Deployment

### Build

```bash
npm run build
```

### Environment Variables

Set these in your production environment:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-api.com/graphql
NODE_ENV=production
```

### Deploy Options

- **Vercel**: Push to GitHub and connect to Vercel (easiest)
- **Docker**: Create a Dockerfile and deploy to any container platform
- **Static Export**: Use `next export` for static hosting

## Troubleshooting

### GraphQL Connection Issues

- Verify `NEXT_PUBLIC_GRAPHQL_ENDPOINT` is correct
- Check CORS settings on your backend
- Ensure backend is running and accessible

### Type Errors

- Run `npm run codegen` to regenerate types
- Check that your GraphQL schema matches the queries

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
